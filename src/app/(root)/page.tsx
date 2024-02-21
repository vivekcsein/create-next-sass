import Script from "next/script";
// require("dotenv").config();
import Hero from "../../components/content/Hero";

export default function Home() {
  // const gaMeasurementId = process.env.GOOGLE_GA_MEASUREMENT_ID;
  return (
    <>
      <Hero />
    </>
  );
}
