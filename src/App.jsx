import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [orderCount, setOrderCount] = useState(0);

  const handleOrder = () => {
    setOrderCount(orderCount + 1);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!",
      "_blank"
    );
  };

  return (
    <>
      <div className="container">
        <Header />
        <ProductSection onOrder={handleOrder} />
        <Footer />
      </div>

      {/* Floating WhatsApp Button - Outside container for global placement */}
      <button
        className="whatsapp-float"
        onClick={openWhatsApp}
        title="Fale comigo no WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp />
      </button>
    </>
  );
}

export default App;
