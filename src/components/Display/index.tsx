import * as S from "./styles";

type DisplayProps = {
  valor: number;
};

export function Display({ valor }: DisplayProps) {
  return <S.Value>{valor}</S.Value>;
}
