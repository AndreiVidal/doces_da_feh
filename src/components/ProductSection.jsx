import React, { useState } from "react";
import "../styles/ProductSection.css";
import Table from "./Table";

const ProductSection = ({ title }) => {
  const [showImages, setShowImages] = useState(false);
  const [showRecheios, setShowRecheios] = useState(false);

  const images = [
    "/src/assets/bolo1.jpg",
    "/src/assets/bolo2.jpg",
    "/src/assets/bolo3.jpg",
    "/src/assets/bolo4.jpg",
    "/src/assets/bolo5.jpg",
    "/src/assets/bolo6.jpg",
    "/src/assets/bolo7.jpg",
    "/src/assets/bolo8.jpg",
  ];

  const toggleImages = () => setShowImages(!showImages);
  const toggleRecheios = () => setShowRecheios(!showRecheios);

  const openWhatsApp = () => {
    const whatsappURL =
      "https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!";
    window.open(whatsappURL, "_blank");
  };

  // Dados para a tabela dinâmica
  const tableData = [
    {
      title: "Brigadeiros",
      headers: ["Sabores Tradicionais - R$120,00", "Sabores Especiais - R$140,00"],
      rows: [
        ["P - 15 fatias", "R$ 70,00"],
        ["P - 15 fatias", "R$ 70,00"],
        ["M - 30 fatias", "R$ 140,00"],
        ["M - 30 fatias", "R$ 140,00"],
        ["M - 30 fatias", "R$ 140,00"],
        ["M - 30 fatias", "R$ 140,00"],
        ["M - 30 fatias", "R$ 140,00"],
        ["M - 30 fatias", "R$ 140,00"],
      ],
    },
    {
      title: "Bolos",
      headers: ["Tamanhos", "4 Recheios", "5 Recheios"],
      rows: [
        ["P - 15 fatias", "R$ 100,00", "R$ 120,00"],
        ["M - 30 fatias", "R$ 180,00", "R$ 210,00"],
        ["G - 60 fatias", "R$ 300,00", "R$ 350,00"],
      ],
    },
  ];

  return (
    <section className="product-section">
      <h2>{title}</h2>

      <div className="product-container">
        {/* Tabela dinâmica */}
        <div className="table-container">
          <Table data={tableData} />
        </div>

        {/* Escolher recheio */}
        <div className="recheios-container">
          <button className="recheios-btn" onClick={toggleRecheios}>
            Recheios
          </button>

          {showRecheios && (
            <div className="recheios-list">
              <h3>Escolha seu Recheio:</h3>
              <ul>
                <li><strong>Chantili:</strong> Bombom, Pedaços de Chocolate, Oreo, Frutas</li>
                <li><strong>Mousse:</strong> Chocolate, Morango, Abacaxi</li>
                <li><strong>Brigadeiro:</strong> Tradicional, Branquinho, Café, Paçoca, Oreo</li>
                <li><strong>Coco com Leite Condensado</strong></li>
                <li><strong>Sensação:</strong> Mousse de Morango com Pedaços de Chocolate</li>
                <li><strong>Doce de Leite</strong></li>
                <li><strong>Acréscimos:</strong> Ganache, Nutella, Ameixa, 2 Tipos de Frutas</li>
              </ul>
            </div>
          )}
        </div>

        {/* Botão para mostrar imagens */}
        <button className="details-btn" onClick={toggleImages}>
          {showImages ? "Ocultar meus trabalhos" : "Veja alguns dos meus trabalhos"}
        </button>

        {/* Galeria de imagens */}
        {showImages && (
          <div className="image-gallery">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Bolo ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        )}

        {/* Botão do WhatsApp */}
        <button className="order-btn" onClick={openWhatsApp}>
          Fazer Pedido
        </button>
      </div>

      {/* Observações */}
      <div className="observations-section">
        <h3>Observações</h3>
        <ul>
          <li><strong>Encomendas:</strong> Mediante 50% do valor</li>
          <li><strong>Entregas:</strong> A combinar</li>
          <li><strong>Encomendas:</strong> Até 6 dias antes da entrega</li>
          <li><strong>Formas de pagamento:</strong> PIX, Dinheiro, Cartão</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductSection;
