import Banner from "./_components/Banner";
import Navbar from "./_components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";
import FloatingWhatsApp from "./_components/WhatsappIcon.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <a
        // href="https://wa.me/your-phone-number"
        target="_blank"
        // rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FontAwesomeIcon icon={FaWhatsapp} />
      </a> */}
      <FloatingWhatsApp />
    </>
  );
}
