import React from "react";
import { Container, ContainerDisabled, Image, Label } from "./styles";

const Card = ({
  name,
  image,
  selected = false,
  secondary = false,
  disabled = false,
  action,
}: ElementItem & {
  secondary?: boolean;
  selected?: boolean;
  disabled?: boolean;
  action?: () => void;
}) => {
  const color = secondary ? "#ce363fff" : "#195ab4";
  return (
    <Container color={color} selected={selected} onClick={action}>
      <Image src={image} />
      <Label color={color} selected={selected}>
        {name}
      </Label>
      {disabled && <ContainerDisabled />}
    </Container>
  );
};

export default Card;
