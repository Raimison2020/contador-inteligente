import * as S from "./styles";

type ControlsProps = {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export function Controls({ onIncrement, onDecrement, onReset }: ControlsProps) {
  return (
    <S.Container>
      <S.Button onClick={onIncrement}>+</S.Button>
      <S.Button onClick={onDecrement}>-</S.Button>
      <S.Button onClick={onReset}>Resetar</S.Button>
    </S.Container>
  );
}
