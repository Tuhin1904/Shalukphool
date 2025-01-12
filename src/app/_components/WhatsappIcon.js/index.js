import Image from "next/image";
import Link from "next/link";

const FloatingWhatsApp = () => {
  return (
    <div style={styles.container}>
      <Link
        href="https://wa.me/<your-phone-number>"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image alt="whatsapp" src="./whatsapp.svg" width={50} height={50} />
      </Link>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: "50%",
  },
  icon: {
    fontSize: "50px",
    color: "#25D366",
    cursor: "pointer",
  },
};

export default FloatingWhatsApp;
