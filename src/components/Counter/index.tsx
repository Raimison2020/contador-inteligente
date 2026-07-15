import { useEffect, useState } from "react";
import * as S from "./styles";
import { Display } from "../Display";
import { Controls } from "../Controls";

export function Counter() {
  console.log("Renderizou");

  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    console.log("Executou o useEffect");

    document.title = `Contador: ${contador}`;
  }, [contador, nome]);

  useEffect(() => {
    console.log("Criando intervalo");
    const intervalo = setInterval(() => {
      setTempo((tempoAnterior) => tempoAnterior + 1);
    }, 1000);

    return () => {
      console.log("Limpando intervalo");
      clearInterval(intervalo);
    };
  }, []);

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

      <Controls
        onIncrement={incrementar}
        onDecrement={diminuir}
        onReset={resetar}
      />

      <p>Tempo na página: {tempo} - Segundos</p>
    </S.Container>
  );
}
