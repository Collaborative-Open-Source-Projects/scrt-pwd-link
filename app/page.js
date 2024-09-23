import Image from "next/image";

export default function Home() {
  const serverTime = new Date().toISOString();
  return (
    <div>Current Server Time: {serverTime}</div>
  );
}
