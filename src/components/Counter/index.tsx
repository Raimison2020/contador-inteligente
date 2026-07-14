import { useEffect, useState } from "react";
import * as S from "./styles";

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

      <p>Valor: {contador}</p>

      <S.ButtonGroup>
        <button
          onClick={() => setContador((valorAnterior) => valorAnterior + 1)}
        >
          Incrmentar
        </button>
        <button
          onClick={() => setContador((valorAnterior) => valorAnterior - 1)}
        >
          Diminuir
        </button>
        <button onClick={() => setContador(0)}>Reset</button>
      </S.ButtonGroup>

      <p>Tempo na página: {tempo} - Segundos</p>
    </S.Container>
  );
}
