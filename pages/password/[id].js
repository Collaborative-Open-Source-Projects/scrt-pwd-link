import clientPromise from "@/app/lib/mongodb";
import { decrypt } from "@/app/utils/decrpyt";
export async function getServerSideProps({ params }) {
  const { id } = params;

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("scrt-pwd-data");

  // Fetch the encrypted password using the ID
  const record = await db.collection("scrt-pwd-data").findOne({ id });

  if (!record) {
    return {
      notFound: true,
    };
  }

  const currentTime = new Date();
  const expiryTime = new Date(record.expiresAt);

  // Check if the record has expired
  if (currentTime > expiryTime) {
    return {
      props: {
        expired: true,
        password: null,
      },
    };
  }


  return {
    props: {
      expired: false,
      password: record.encryptedSecret
        ? decrypt(
            record.encryptedSecret.encryptedData,
            record.encryptedSecret.iv
          )
        : "",
    },
  };
}

export default function PasswordPage({ password, expired }) {
  if (expired) {
    return (
      <div>
        <h1>This link has expired</h1>
        <p>The secret password is no longer available.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Your Secret Password is:</h1>
      <p>{password}</p>
    </div>
  );
}
