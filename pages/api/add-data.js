import clientPromise from "@/app/lib/mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const client = await clientPromise;
            const db = client.db('scrt-pwd-data');
            const collection = db.collection('scrt-pwd-data');

            const data = req.body;

            const result = await collection.insertOne(data);
            res.status(201).json({success: true, message: "Data added successfully!", data: result});
        }
        catch (error){
            console.error(error);
            res.status(500).json({success: false, message: 'Failed to add data'});
        }
    }
    else {
        res.status(405).json({message: 'Method not allowed.'});
    }    
}