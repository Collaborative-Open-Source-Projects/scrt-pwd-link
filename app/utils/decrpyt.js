import crypto from "crypto";
const encryptionKey = process.env.ENCRYPTION_KEY;
export function decrypt(encryptedData, iv) {
  //creating decipher object with the algorithm , key , iv
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey, "hex"),
    Buffer.from(iv, "hex")
  );
  let decryptedText = decipher.update(Buffer.from(encryptedData, "hex"));
  decryptedText = Buffer.concat([decryptedText, decipher.final()]);
  return decryptedText.toString();
}
