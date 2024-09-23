import { MongoClient } from "mongodb";

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;
const cluster = process.env.MONGODB_CLUSTER;

const uri = `mongodb+srv://${user}:${password}@${cluster}.cbrsy.mongodb.net/?retryWrites=true&w=majority&appName=${cluster}`

// check if uri is empty
if (!uri) {
    throw new Error("Please add your Mongo URI to Environment Variables.");
}

let client = new MongoClient(uri);
let clientPromise = client.connect();

export default clientPromise;