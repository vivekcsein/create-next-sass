import type { Metadata } from "next";
import { roboto } from "../libs/utils/style";
import "../styles/globals.css";
import "../styles/styles.scss";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Font from "../components/content/Font";

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
        <div id="headerLoader" className="sticky z-50">
          <Header />
        </div>
        {children}
        <div id="footerLoader" className="z-50">
          <Footer />
        </div>
        <Font />
      </body>
    </html>
  );
}
