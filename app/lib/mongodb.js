import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI

// check if uri is empty
if (!uri) {
    throw new Error("Please add your Mongo URI to Environment Variables.");
}

let client = new MongoClient(uri);
let clientPromise = client.connect();

export default clientPromise;