import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/logo.png"; 

const Home = () => {
  return (
    <main style={styles.main}>
      <div style={styles.heroContainer}>
        <div style={styles.textContainer}>
          <h2>Bem-vindo ao Converte+</h2>
          <p>Site projetado para estágio voluntário.</p>
        </div>
        <Link to="/unidades">
        <img src={HeroImage} alt="Conversão" style={styles.heroImage} />
        </Link>
      </div>
    </main>
  );
};

const styles = {
  main: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  heroContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap", // responsivo
    maxWidth: "1200px",
    width: "100%",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  textContainer: {
    flex: "1 1 300px",
    minWidth: "250px"
  },
  heroImage: {
    flex: "1 1 300px",
    maxWidth: "100%",
    height: "auto",
  }
};

export default Home;
