import clientPromise from "@/app/lib/mongodb";
import { encrypt } from "@/app/utils/encrypt";
import { date_to_ms } from "@/app/utils/date_to_ms";
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('scrt-pwd-data');
    const collection = db.collection('scrt-pwd-data');

    if (req.method === 'POST') {
        try {
            const { secret, formData } = req.body;
            const { expiry, expiryType } = formData;
            const id = uuidv4();

            if (!secret) {
                return res.status(400).json({success: false, message: 'Secret is required'});
            }

            const encryptedSecret = encrypt(secret);
            const createdAt = new Date();
            const expiresAt = new Date(createdAt.getTime() + date_to_ms(expiry, expiryType));
            const encryptionKey = null;

            const secret_store = {
                secret_text: secret,
                encryptedSecret: encryptedSecret,
                id: id,
                createdAt: createdAt,
                expiresAt: expiresAt,
                key: encryptionKey,
            };

            await collection.insertOne(secret_store);

            const link = `https://secret-pwd-link.vercel.app/password/${id}`;

            res.status(200).json({success: true, link: link});
        }
        catch (error) {
            console.error(error);
            res.status(500).json({success: false, message: 'Failed to add secret'});
        }
    }
    else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}