import React, { useState } from "react";


const Botao = ({ children, onClick, disabled = false }) => {
  const [hover, setHover] = React.useState(false);

  const estiloBotao = {
    ...styles.buttonBase,
    ...(disabled
      ? styles.buttonDisabled
      : hover
      ? styles.buttonHover
      : styles.buttonNormal),
  };

  return (
    <button
      style={estiloBotao}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

const Modal = ({ aberto, onClose, children }) => {
  if (!aberto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}

        <button className="modal-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};


const unidades = {
  Tempo: ["Horas", "Minutos", "Segundos"],
  Peso: ["Toneladas","Quilogramas","Hectogramas","Decagramas","Gramas","Decigramas","Centigramas","Miligramas"],
  Liquidos: ["Quilolitros","Hectolitros","Decalitros","Litros","Decilitros","Centilitros","Mililitros"],
  Distancia: ["Milimetros","Centimetros","Decimetros","Metros","Decametros","Hectometros","Quilometros"]
};

const fatores = {
  Tempo: { Horas: 3600, Minutos: 60, Segundos: 1 },
  Peso: {
    Toneladas: 1e6,
    Quilogramas: 1000,
    Hectogramas: 100,
    Decagramas: 10,
    Gramas: 1,
    Decigramas: 0.1,
    Centigramas: 0.01,
    Miligramas: 0.001
  },
  Liquidos: {
    Quilolitros: 1000,
    Hectolitros: 100,
    Decalitros: 10,
    Litros: 1,
    Decilitros: 0.1,
    Centilitros: 0.01,
    Mililitros: 0.001
  },
  Distancia: {
    Milimetros: 0.001,
    Centimetros: 0.01,
    Decimetros: 0.1,
    Metros: 1,
    Decametros: 10,
    Hectometros: 100,
    Quilometros: 1000
  }
};

const Unidades = () => {
  const [categoria, setCategoria] = useState("Tempo");
  const [valor, setValor] = useState("");
  const [de, setDe] = useState(unidades["Tempo"][0]);
  const [para, setPara] = useState(unidades["Tempo"][1]);
  const [resultado, setResultado] = useState("");

  const [modalAberto, setModalAberto] = useState(false);

  const handleConverter = () => {
    const valorNum = parseFloat(valor);

    if (isNaN(valorNum)) {
      setResultado("Insira um número válido");
      return;
    }

    const base = valorNum * fatores[categoria][de];
    const convertido = base / fatores[categoria][para];

    const resultadoFormatado = convertido.toLocaleString("pt-BR", {maximumFractionDigits: 6});
    setResultado(`${resultadoFormatado} ${para}`);
    setModalAberto(true);
  };

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.row}>
          <label style={styles.label}>Categoria:</label>
          <select
            style={styles.select}
            value={categoria}
            onChange={e => {
              const cat = e.target.value;
              setCategoria(cat);
              setDe(unidades[cat][0]);
              setPara(unidades[cat][1]);
              setValor("");
              setResultado("");
            }}
          >
            {Object.keys(unidades).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Valor:</label>
          <input
            style={styles.input}
            type="text"
            value={valor}
            onChange={e => setValor(e.target.value)}
            placeholder="Apenas números"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>De:</label>
          <select style={styles.select} value={de} onChange={e => setDe(e.target.value)}>
            {unidades[categoria].map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Para:</label>
          <select style={styles.select} value={para} onChange={e => setPara(e.target.value)}>
            {unidades[categoria].map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        {/* BOTÃO CONVERTER */}
      <Botao
  onClick={handleConverter}
  disabled={!valor}
>
  Converter
</Botao>

       <Modal
  aberto={modalAberto}
  onClose={() => setModalAberto(false)}
>
  <h2 style={{ color: "#000", textAlign: "center" }}>
    Resultado
  </h2>

  <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
    {resultado}
  </p>
</Modal>
      </div>
    </main>
  );
};

const styles = {
  main: {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  card: {
    backgroundColor: "#000000d3",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  row: { display: "flex", flexDirection: "column", gap: "5px" },
  label: { fontWeight: "bold", color: "#ffffffff" },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#ffffffff",
    color: "#000000ff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  result: {
    marginTop: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffffff",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 
  }
};

export default Unidades;
