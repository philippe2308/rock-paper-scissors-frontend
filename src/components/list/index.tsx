import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

const List = ({
  children,
  secondary = false,
}: PropsWithChildren & { secondary?: boolean }) => {
  const color = secondary ? "#ffe5e6ff" : "#e6e7ea";
  return <Container color={color}>{children}</Container>;
};

export default List;
