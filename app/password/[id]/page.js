// app/password/[id]/page.js

import clientPromise from "@/app/lib/mongodb";
import { decrypt } from "@/app/utils/decrpyt";
import CopyButton from "@/app/components/ui/CopyButton";
export default async function Page({ params }) {
  // Access the 'id' from the URL
  const { id } = params;

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("scrt-pwd-data");

  // Fetch the encrypted password using the ID
  const record = await db.collection("scrt-pwd-data").findOne({ id });

  if (!record) {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>The requested password does not exist.</p>
        <CopyButton />
      </div>
    );
  }

  const currentTime = new Date();
  const expiryTime = new Date(record.expiresAt);

  // Check if the record has expired
  const expired = currentTime > expiryTime;
  const decryptedPassword = record.encryptedSecret
    ? decrypt(record.encryptedSecret.encryptedData, record.encryptedSecret.iv)
    : "";

  return (
    <div>
      {expired ? (
        <div>
          <h1>This link has expired</h1>
          <p>The secret password is no longer available.</p>
        </div>
      ) : (
        <div className="h-[400px] rounded-md md:w-[80%] xl:w-[50%] w-[96%] border-solid border-[1px] outline outline-4 outline-teal-400/30 border-teal-400 mx-auto my-[10vh] backdrop-blur-lg flex justify-center text-container bg-[color:var(--card-background)]  items-center flex-col">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold py-4 ">
            Your Secret Password is:
          </h1>
          <p className="text-purple-500 text-2xl md:text-3xl text-center">
            {decryptedPassword ? decryptedPassword : "nothing"}
          </p>
          <CopyButton textToCopy={decryptedPassword} />
        </div>
      )}
    </div>
  );
}
