import React from "react";
import { FaCopyright } from 'react-icons/fa'; 

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>📞 Faça sua encomenda: <a href="tel:+55991348748">55 99134-9746</a></p>
      <div className="footer-credits">
        <FaCopyright className="copy-icon" /> 
        <span className="footer-text">
          Feito por Andrei Vidal Godoi, {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
