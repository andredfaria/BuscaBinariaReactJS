import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import "./styles.css";
//estado do jogo entrada, fim, rodando
//chute de 0 a 300
//quantidade de palpite

function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numeroPlapite, setNumero] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumero(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertou com {palpite} com {numeroPlapite} chutes
        </p>
        <button onClick={iniciarJogo}>Começar de novo</button>
      </div>
    );
  }

  const acertou = () => {
    setEstado("FIM");
  };
  const menor = () => {
    setNumero(numeroPlapite + 1);
    setMax(palpite);
    const proximoPlapite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPlapite);
  };
  const maior = () => {
    setNumero(numeroPlapite + 1);
    setMin(palpite);
    const proximoPlapite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPlapite);
  };

  return (
    <div className="App">
      <h1>O seu numero é o {palpite}</h1>
      <p>
        minimo é {min} / maximo é {max}
      </p>
      <button onClick={maior}> Maior </button>
      <button onClick={acertou}> Acertou </button>
      <button onClick={menor}> Menor </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
