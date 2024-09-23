import clientPromise from "@/app/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Ping the database to check connection
    await db.command({ ping: 1 });

    res.status(200).json({ isConnected: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ isConnected: false });
  }
}