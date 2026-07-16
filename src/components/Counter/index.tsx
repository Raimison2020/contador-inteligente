import { useEffect, useState } from "react";
import * as S from "./styles";
import { Display } from "../Display";
import { Controls } from "../Controls";
import { Timer } from "../Timer";

function obterMensagem(contador: number): string {
  if (contador >= 0 && contador <= 9) {
    return "🙂 Iniciante";
  } else if (contador >= 10 && contador <= 19) {
    return "🎉 Bom trabalho";
  } else if (contador >= 20 && contador <= 49) {
    return "🚀 Excelente";
  } else if (contador >= 50) {
    return "🏆 Mestre";
  }

  return "Valor inválido.";
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
