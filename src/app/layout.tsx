import type { Metadata } from "next";
import { roboto } from "../libs/utils/style";
import "../styles/globals.css";
import "../styles/styles.scss";
import Font from "../components/content/Font";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://website.in"),
  title: {
    default: "Title",
    template: `%s | title`,
  },
  description:
    "A NextJS template for creating full production based application",
  icons: "favicon.png",
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-bgc relative`}>
        {children}
        <Font />
      </body>
    </html>
  );
}
