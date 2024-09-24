import crypto from 'crypto';

const encryptionKey = crypto.randomBytes(32).toString('hex');
const ivLength = 16;

export function encrypt (text) {

    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey, 'hex'), iv);
    let encryptedText = cipher.update(text);
    encryptedText = Buffer.concat([encryptedText, cipher.final()]);

    return { iv: iv.toString('hex'), encryptedData: encryptedText.toString('hex') };
}