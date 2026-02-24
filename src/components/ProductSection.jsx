import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaChevronDown, FaChevronUp, FaSearchPlus } from "react-icons/fa";
import "../styles/ProductSection.css";

const ProductSection = ({ onOrder }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [showRecheios, setShowRecheios] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/bolo1.jpg", "/bolo2.jpg", "/bolo3.jpg", "/bolo4.jpg", "/bolo5.jpg",
    "/bolo6.jpg", "/bolo7.jpg", "/bolo8.jpg", "/bolo9.jpg", "/bolo10.jpg"
  ];

  const previewImages = images.slice(0, 6);
  const displayImages = showAllImages ? images : previewImages;

  const toggleRecheios = () => setShowRecheios(prev => !prev);

  const openWhatsApp = () => {
    window.open("https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!", "_blank");
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget || e.target.closest('.modal-close')) {
      setSelectedImage(null);
    }
  };

  return (
    <section className="product-section">

      {/* ======================== GALERIA ======================== */}
      <div id="galeria" className="section-block">
        <div className="section-header">
          <h2 className="section-title">Meus Trabalhos</h2>
          <p className="section-subtitle">Cada bolo é feito com carinho e atenção aos detalhes</p>
        </div>

        <div className={`gallery-grid ${showAllImages ? 'gallery-grid--expanded' : ''}`}>
          {displayImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`gallery-card ${index === 0 ? 'gallery-card--featured' : ''}`}
              onClick={() => setSelectedImage(imgSrc)}
            >
              <img
                src={imgSrc}
                alt={`Bolo decorado ${index + 1}`}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <FaSearchPlus className="gallery-card-icon" />
              </div>
            </div>
          ))}
        </div>

        {images.length > 6 && (
          <button
            className="btn btn--outline"
            onClick={() => setShowAllImages(prev => !prev)}
          >
            {showAllImages ? (
              <><FaChevronUp style={{ marginRight: 6 }} /> Mostrar Menos</>
            ) : (
              <><FaChevronDown style={{ marginRight: 6 }} /> Ver Todas as Fotos ({images.length})</>
            )}
          </button>
        )}
      </div>

      {/* ======================== CARDÁPIO / PREÇOS ======================== */}
      <div id="cardapio" className="section-block">
        <div className="section-header">
          <span className="section-badge">🍰 Cardápio</span>
          <h2 className="section-title">Valores</h2>
          <p className="section-subtitle">Escolha o que combina com a sua comemoração</p>
        </div>

        {/* Brigadeiros — card especial */}
        <div className="pricing-card pricing-card--highlight">
          <div className="pricing-card-header">
            <h3>Brigadeiros</h3>
            <p className="pricing-card-note">Cento (100 unidades)</p>
          </div>
          <div className="pricing-columns">
            <div className="pricing-column">
              <div className="pricing-column-header">
                <span className="pricing-label">Tradicionais</span>
                <span className="pricing-value">R$ 145</span>
              </div>
              <ul className="pricing-items">
                <li>Brigadeiro 50% cacau</li>
                <li>Branquinho</li>
                <li>Dois Amores</li>
                <li>Café</li>
                <li>Morango</li>
                <li>Sensação</li>
                <li>Cajuzinho</li>
                <li>Menta</li>
              </ul>
            </div>
            <div className="pricing-column pricing-column--accent">
              <div className="pricing-column-header">
                <span className="pricing-label">Especiais</span>
                <span className="pricing-value">R$ 170</span>
              </div>
              <ul className="pricing-items">
                <li>Churros</li>
                <li>Oreo</li>
                <li>Paçoca</li>
                <li>Confetes (massas 50% cacau ou Ninho)</li>
                <li>Choco Balls (massas 50% cacau ou Ninho)</li>
                <li>Ninho com Nutella</li>
                <li>Ferrero Rocher</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bolos — cards lado a lado */}
        <div className="pricing-row">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Bolos Retangulares</h3>
            </div>
            <div className="pricing-table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Tamanho</th>
                    <th>2 Recheios</th>
                    <th>Até 3 Recheios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>P</strong> <span className="text-muted">até 15 fatias</span></td>
                    <td className="price-cell">R$ 90</td>
                    <td className="price-cell">R$ 115</td>
                  </tr>
                  <tr>
                    <td><strong>M</strong> <span className="text-muted">até 30 fatias</span></td>
                    <td className="price-cell">R$ 170</td>
                    <td className="price-cell">R$ 210</td>
                  </tr>
                  <tr className="tr-highlight">
                    <td><strong>G</strong> <span className="text-muted">30×40</span></td>
                    <td className="price-cell">R$ 270</td>
                    <td className="price-cell">R$ 340</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Bolo Redondo</h3>
            </div>
            <div className="pricing-table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Tamanho</th>
                    <th>2 Recheios</th>
                    <th>Até 3 Recheios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Redondo</strong> <span className="text-muted">20 a 25 fatias</span></td>
                    <td className="price-cell">R$ 150</td>
                    <td className="price-cell">R$ 190</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recheios */}
        <div className="recheios-container">
          <button className={`recheios-toggle ${showRecheios ? 'recheios-toggle--active' : ''}`} onClick={toggleRecheios}>
            <span>Ver Recheios Disponíveis</span>
            {showRecheios ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {showRecheios && (
            <div className="recheios-grid">
              <div className="recheio-card">
                <h4>Chantilly</h4>
                <p>Bombom · Pedaços de Chocolate · Morango · Abacaxi · Pêssego</p>
              </div>
              <div className="recheio-card">
                <h4>Mousse</h4>
                <p>Chocolate · Morango · Abacaxi</p>
              </div>
              <div className="recheio-card">
                <h4>Brigadeiro</h4>
                <p>Tradicional · Branquinho · Café · Paçoca · Oreo</p>
              </div>
              <div className="recheio-card">
                <h4>Coco</h4>
                <p>Coco ralado com leite condensado</p>
              </div>
              <div className="recheio-card">
                <h4>Sensação</h4>
                <p>Mousse de morango com pedaços de chocolate</p>
              </div>
              <div className="recheio-card">
                <h4>Doce de Leite</h4>
                <p>Doce de leite cremoso</p>
              </div>
              <div className="recheio-card recheio-card--accent">
                <h4>Acréscimos</h4>
                <p>Ganache · Nutella · Ameixa · 2 Tipos de Frutas</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA WhatsApp */}
        <button className="cta-whatsapp" onClick={openWhatsApp}>
          <FaWhatsapp className="cta-icon" />
          <div className="cta-text">
            <span className="cta-title">Fazer Pedido</span>
            <span className="cta-sub">Fale comigo no WhatsApp</span>
          </div>
        </button>
      </div>

      {/* ======================== OBSERVAÇÕES ======================== */}
      <div className="info-bar">
        <div className="info-item">
          <span className="info-icon">📋</span>
          <div>
            <strong>Encomendas</strong>
            <span>Mediante 50% do valor, com no mínimo 5 dias de antecedência</span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">🚗</span>
          <div>
            <strong>Entregas</strong>
            <span>Valor e horário a combinar</span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">🎨</span>
          <div>
            <strong>Personalizados</strong>
            <span>Toppers e papel arroz com acréscimo a combinar</span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">💳</span>
          <div>
            <strong>Pagamento</strong>
            <span>PIX, Dinheiro, Cartão</span>
          </div>
        </div>
      </div>

      {/* ======================== MODAL ======================== */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Bolo em destaque" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
