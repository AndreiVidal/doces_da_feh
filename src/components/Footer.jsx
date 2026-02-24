import React from "react";
import { FaCopyright, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contato">
      <h3>Entre em Contato</h3>

      <div className="footer-info">
        <div className="footer-info-item">
          <FaPhone /> <a href="tel:+55991348748">55 99134-9746</a>
        </div>
        <div className="footer-info-item">
          <FaMapMarkerAlt /> <span>Região de atendimento: consulte</span>
        </div>
      </div>

      <div className="footer-social">
        <a
          href="https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-credits">
        <FaCopyright className="copy-icon" />
        <span>Feito por Andrei Vidal Godoi, {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
