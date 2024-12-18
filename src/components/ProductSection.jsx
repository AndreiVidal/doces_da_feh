import React, { useState } from "react";
import "../styles/ProductSection.css";
import Table from "./Table";

const ProductSection = ({ title }) => {
  const [showImages, setShowImages] = useState(false);
  const [showRecheios, setShowRecheios] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem selecionada

  const images = [
    "/bolo1.jpg", "/bolo2.jpg", "/bolo3.jpg", "/bolo4.jpg", "/bolo5.jpg",
    "/bolo6.jpg", "/bolo7.jpg", "/bolo8.jpg", "/bolo9.jpg", "/bolo10.jpg"
  ];

  const tableData = [
    {
      title: "Brigadeiros",
      headers: ["Sabores Tradicionais - R$120,00", "Sabores Especiais - R$140,00"],
      rows: [
        ["Brigadeiro 50% cacau", "Churros"],
        ["Branquinho", "Oreo"],
        ["Dois Amores", "Paçoca"],
        ["Café", "Confetes"],
        ["Morango", "Choco Balls"],
        ["Sensação", "Nutella"],
        ["Cajuzinho", "Ferrero Roche"],
        ["Menta", ""],
      ],
    },
    {
      title: "Bolos",
      headers: ["Tamanhos", "2 Recheios", "3 Recheios"],
      rows: [
        ["P - 15 fatias", "R$ 70,00", "R$ 90,00"],
        ["M - 30 fatias", "R$ 140,00", "R$ 175,00"],
        ["G - 60 fatias", "R$ 220,00", "R$ 280,00"],
      ],
    },
    {
      title: "Bolo Redondo",
      headers: ["Tamanho", "Valor"],
      rows: [["Aro 25cm", "R$ 160,00"]],
    },
  ];

  const toggleImages = () => setShowImages(prev => !prev);
  const toggleRecheios = () => setShowRecheios(prev => !prev);

  const openWhatsApp = () => {
    const whatsappURL = "https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!";
    window.open(whatsappURL, "_blank");
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="product-section">
      <h2>{title}</h2>

      <div className="product-container">
        {/* Tabela de Preços */}
        <div className="table-container">
          <Table data={tableData} />
        </div>

        {/* Seção de Recheios */}
        <div className="recheios-container">
          <button className="recheios-btn" onClick={toggleRecheios}>Recheios</button>
          {showRecheios && (
            <div className="recheios-list">
              <h3 className="title">Escolha seu Recheio:</h3>
              <ul className="list">
                <li><strong>Chantili:</strong> Bombom, Pedaços de Chocolate, Frutas (Morango, Abacaxi, Pêssego)</li>
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

        {/* Galeria de Imagens */}
        {showImages && (
          <div className="image-gallery">
            {images.map((imgSrc, index) => (
              <img 
                key={index} 
                src={imgSrc} 
                alt={`Bolo ${index + 1}`} 
                className="gallery-image" 
                onClick={() => handleImageClick(imgSrc)} 
              />
            ))}
          </div>
        )}

        {/* Modal para exibir a imagem maior */}
        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content">
              <img src={selectedImage} alt="Imagem maior" className="modal-image" />
            </div>
          </div>
        )}

        {/* Botão do WhatsApp */}
        <button className="order-btn" onClick={openWhatsApp}>Fazer Pedido</button>
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
