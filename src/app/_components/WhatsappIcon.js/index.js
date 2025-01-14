import Image from "next/image";
import Link from "next/link";
import "./whatsapp.css";

const FloatingWhatsApp = () => {
  return (
    <div className="container-2">
      <Link
        href="https://wa.me/919875490291"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image alt="whatsapp" src="./whatsapp.svg" width={50} height={50} />
      </Link>
    </div>
  );
};

export default FloatingWhatsApp;
