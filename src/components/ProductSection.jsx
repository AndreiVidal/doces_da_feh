import React, { useState } from "react";
import "../styles/ProductSection.css"; // Importe o arquivo CSS corretamente
import Table from "./Table"; // Importe o componente da tabela

const ProductSection = ({ title }) => {
  const [showImages, setShowImages] = useState(false);
  const [showRecheios, setShowRecheios] = useState(false);

  // Lista de imagens de exemplo
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

  // Função para abrir o WhatsApp em uma nova guia
  const openWhatsApp = () => {
    const whatsappURL =
      "https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!";
    window.open(whatsappURL, "_blank"); // Abre o WhatsApp em uma nova guia
  };

  return (
    <section className="product-section">
      <h2>{title}</h2>

      <div className="product-container">
        {/* Tabela centralizada */}
        <div className="table-container">
          <Table />
        </div>

        {/* Botão para escolher recheio, agora abaixo da tabela */}
        <div className="recheios-container">
          <button className="recheios-btn" onClick={toggleRecheios}>
            Escolher Recheio
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

        {/* Botão para mostrar as imagens */}
        <button className="details-btn" onClick={toggleImages}>
          {showImages ? "Ocultar meus trabalhos" : "Veja alguns dos meus trabalhos"}
        </button>

        {/* Galeria de imagens visível ao clicar */}
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

        {/* Botão para redirecionar ao WhatsApp */}
        <button className="order-btn" onClick={openWhatsApp}>
          Fazer Pedido
        </button>
      </div>

      {/* Seção de Observações */}
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
