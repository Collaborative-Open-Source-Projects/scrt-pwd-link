import { MongoClient } from "mongodb";

const uri = 'mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_CLUSTER}.cbrsy.mongodb.net/?retryWrites=true&w=majority&appName=${MONGODB_CLUSTER}'

// check if uri is empty
if (!uri) {
    throw new Error("Please add your Mongo URI to Environment Variables.");
}

let client = new MongoClient(uri);
let clientPromise = client.connect();

export default clientPromise;