import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo + Brand */}
        <a href="#" className="header-brand" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Logo Doçuras da Feh" className="header-logo" />
          <div className="header-brand-text">
            <h1>Doçuras da Feh</h1>
            <p className="header-tagline">Doces artesanais com carinho</p>
          </div>
        </a>

        {/* Mobile menu branding at top of drawer */}
        <nav className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}>
          <div className="header-nav-brand-mobile">
            <img src="/logo.jpg" alt="Logo" className="header-logo-mobile" />
            <h3>Doçuras da Feh</h3>
          </div>
          <a href="#cardapio" onClick={closeMenu} style={{ "--i": 1 }}>Cardápio</a>
          <a href="#galeria" onClick={closeMenu} style={{ "--i": 2 }}>Galeria</a>
          <a href="#contato" onClick={closeMenu} style={{ "--i": 3 }}>Contato</a>
          <a
            href="https://wa.me/55991349746?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!"
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-cta"
            onClick={closeMenu}
            style={{ "--i": 4 }}
          >
            <FaWhatsapp /> Pedir agora
          </a>
        </nav>

        {/* Hamburger Button (mobile) */}
        <button
          className="header-menu-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && <div className="header-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
