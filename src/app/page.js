import Banner from "./_components/Banner";
import Navbar from "./_components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingWhatsApp from "./_components/WhatsappIcon.js";
import Link from "next/link";
import ReviewButton from "./_components/Review/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      <FloatingWhatsApp />
      <ReviewButton />
    </>
  );
}
