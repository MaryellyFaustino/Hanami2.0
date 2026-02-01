import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Converte+. Projeto Hanami.</p>
    </footer>
  );
};

//estilo do footer
const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "20px 10px",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 
  }
};

export default Footer;
