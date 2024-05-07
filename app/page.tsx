import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  return {
    title: "Warpcast Frame Example",
    other: await fetchMetadata(
      new URL("/frames", process.env.VERCEL_URL || "http://localhost:3000")
    ),
  };
}

export default function Page() {
  return <span>See my Warpcast frame</span>;
}
