import clientPromise from "@/app/lib/mongodb";
import { encrypt } from "@/app/utils/encrypt";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('scrt-pwd-data');
    const collection = db.collection('scrt-pwd-data');

    if (req.method === 'POST') {
        try {
            const { secret } = req.body;

            if (!secret) {
                return res.status(400).json({success: false, message: 'Secret is required'});
            }

            const encryptedSecret = encrypt(secret);
            const result = await collection.insertOne({secret, encryptedSecret});

            res.status(200).json({success: true, message: 'Secret encrypted and added successfully!'});
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