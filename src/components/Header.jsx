import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Fundo from "../assets/fundoHeader.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Verifica ao montar o componente
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logoContainer}>
          <img src={Logo} alt="Converte+" style={styles.logo} />
          <h1 style={styles.title}>Converte+</h1>
        </div>
      </Link>

      {isMobile && (
        <button
          style={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      )}

      {(menuOpen || !isMobile) && (
        <nav style={{ ...styles.nav, ...(isMobile ? styles.navOpen : {}) }}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/unidades" style={styles.link}>Converter</Link>
        </nav>
      )}
    </header>
  );
};

//estilo do header
const styles = {
  header: {
    backgroundImage: `url(${Fundo})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    minHeight: "120px",    
    padding: "30px 40px",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  logoContainer: { display: "flex", alignItems: "center", gap: "10px" },
  logoLink: { textDecoration: "none", color: "#fff" },
  logo: { width: "60px", height: "60px", objectFit: "contain" },
  title: { margin: 0, fontSize: "2rem", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" },
  nav: { display: "flex", gap: "15px", alignItems: "center" },
  navOpen: { flexDirection: "column", width: "100%", marginTop: "10px" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "bold" },
  menuButton: { fontSize: "2rem", background: "none", border: "none", color: "#fff", cursor: "pointer" }
};

export default Header;
