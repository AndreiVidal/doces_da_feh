import React, { useState } from "react";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [orderCount, setOrderCount] = useState(0);

  const handleOrder = () => {
    setOrderCount(orderCount + 1);
  };

  return (
    <div className="container">
      <Header />
      <ProductSection
        title="❤️ Produtos Artesanais"
        onOrder={handleOrder}
      />
      {/* <p className="order-counter">Pedidos realizados: {orderCount}</p> */}
      <Footer />
    </div>
  );
}

export default App;
