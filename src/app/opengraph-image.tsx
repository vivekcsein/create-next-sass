import { ImageResponse } from "next/og";
import { Lora } from "next/font/google";
export const runtime = "edge";

// visit for creating og images
//https://og-playground.vercel.app
// Image metadata

export const alt = "World best social media for gamers & coders";
export const size = {
  width: 1200,
  height: 600,
};

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-Lora",
});

export const contentType = "image/png";

// Image generation
export default async function OGImage({
  params,
}: {
  params: { slug: string };
}) {
  // const slug = params.slug;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(60deg, #dd00ff, #6600ff,#dd00ff,#6600ff)",
          fontSize: 40,
          fontWeight: 600,
          fontFamily: `${lora.variable}`,
        }}
      >
        <h1 style={{ marginTop: 50, color: "#eeaaaa", fontSize: "6rem" }}>
          👋VivekCSE
        </h1>
        <h3 style={{ marginTop: 0, color: "#ffddff" }}>Software Engineer</h3>
      </div>
    )
  );
}
