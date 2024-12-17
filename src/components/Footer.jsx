import React, { useState } from "react";
import { FaCopyright } from 'react-icons/fa'; // Importação do ícone de copyright

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear(); // Obtendo o ano atual

  const handleCopy = () => {
    navigator.clipboard.writeText("Andrei Vidal Godoi").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mensagem de sucesso por 2 segundos
    });
  };

  return (
    <footer className="footer">
      <p>📞 Faça sua encomenda: <a href="tel:+55991348748">55 99134-9746</a></p>
      {/* Adicionando o nome no canto com o ano */}
      <div className="footer-credits" onClick={handleCopy}>
        <FaCopyright className="copy-icon" /> {/* Ícone de Copyright */}
        <span className="footer-text">
          Feito por Andrei Vidal Godoi, {year}
        </span>
        {copied && <span className="copy-notification">Copiado!</span>} {/* Notificação de sucesso */}
      </div>
    </footer>
  );
};

export default Footer;
