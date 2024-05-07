import { fetchMetadata } from "frames.js/next";
import Head from "next/head";

export async function generateMetadata() {
  return {
    title: "Warpcast Frame Example",
    other: await fetchMetadata(
      new URL("/frames", process.env.VERCEL_URL || "http://localhost:3000")
    ),
  };
}

export default function Page() {
  return (
    <>
      <Head>
        <title>My Frame Page</title>
        <meta property="og:title" content="My Interactive Frame" />
        <meta
          property="og:description"
          content="Description of what your frame does."
        />
        <meta
          property="og:image"
          content="https://edlgn2sd.netlify.app/cookie.jpg"
        />
        <meta property="og:url" content="https://edlgn2sd.netlify.app/frames" />
        <meta property="og:type" content="website" />
      </Head>
      <span>See my Warpcast frame</span>
    </>
  );
}
