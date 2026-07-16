import { useEffect, useState } from "react";
import * as S from "./styles";
import { Display } from "../Display";
import { Controls } from "../Controls";
import { Timer } from "../Timer";

function obterMensagem(contador: number): string {
  switch (contador) {
    case 10:
      return "🎉 Parabéns! Você chegou a 10!";
    case 20:
      return "🚀 Excelente! Continue assim!";
    case 50:
      return "🏆 Impressionante! Você chegou a 50!";

    default:
      return "";
  }
}

export function Counter() {
  console.log("Renderizou");

  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("Executou o useEffect");

    document.title = `Contador: ${contador}`;
  }, [contador]);

  // Functions
  function incrementar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  function resetar() {
    setContador(0);
  }

  const mensagem = obterMensagem(contador);

  return (
    <S.Container>
      <h1>Contador Inteligente</h1>
      <h2>Aprendendo React com TypeScript</h2>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Display valor={contador} />

      {/* Renderização condicional */}
      {mensagem && <h3>{mensagem}</h3>}

      <Controls
        onIncrement={incrementar}
        onDecrement={diminuir}
        onReset={resetar}
      />

      <Timer />
    </S.Container>
  );
}
