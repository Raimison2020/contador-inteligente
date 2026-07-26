import { useEffect, useState } from "react";
import * as S from "./styles";
import { Display } from "../Display";
import { Controls } from "../Controls";
import { Timer } from "../Timer";
import { Card } from "../Card";

function obterMensagem(contador: number): string {
  if (contador == 0) {
    return "";
  } else if (contador <= 9) {
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
  const [nome, setNome] = useState("");

  const [contador, setContador] = useState(() => {
    const contadorSalvo = localStorage.getItem("contador");

    if (contadorSalvo !== null) {
      return Number(contadorSalvo);
    }

    return 0;
  });

  useEffect(() => {
    localStorage.setItem("contador", String(contador));
  }, [contador]);

  useEffect(() => {
    console.log("Executou o useEffect");

    document.title = `Contador: ${contador}`;
  }, [contador]);

  // Functions
  function incrementar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => {
      if (valorAnterior > 0) {
        return valorAnterior - 1;
      }

      return 0;
    });
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
      {mensagem && (
        <Card>
          <h3>{mensagem}</h3>
        </Card>
      )}

      <Controls
        onIncrement={incrementar}
        onDecrement={diminuir}
        onReset={resetar}
      />

      <Timer />
    </S.Container>
  );
}
