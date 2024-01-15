import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

const MatchButton = ({
  disabled = false,
  action,
}: {
  disabled?: boolean;
  action: () => void;
}) => {
  const color = disabled ? "rgba(155, 155, 155)" : "#149a5aff";
  return (
    <Container
      color={color}
      onClick={() => {
        if (!disabled) action();
      }}
    >
      <h1>vs</h1>
      <h1>Jogar</h1>
    </Container>
  );
};

export default MatchButton;
