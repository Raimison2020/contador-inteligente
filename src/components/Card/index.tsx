import * as S from "./styles";

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <S.Container>{children}</S.Container>;
}
