import { useEffect, useState } from "react";
import * as S from "./styles";

export function Timer() {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    console.log("Criando intervalo");

    const intervalId = setInterval(() => {
      setTempo((tempoAnterior) => tempoAnterior + 1);
    }, 1000);

    return () => {
      console.log("Limpando intervalo");
      clearInterval(intervalId);
    };
  }, []);

  return <S.TempoValue>Tempo na página: {tempo} - Segundos.</S.TempoValue>;
}
