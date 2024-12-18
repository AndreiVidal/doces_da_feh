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
        onOrder={handleOrder}
      />
      <Footer />
    </div>
  );
}

export default App;
