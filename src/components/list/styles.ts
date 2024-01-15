import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
  max-width: calc(100% - 32px);
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background: ${({ color }) => color};
  position: relative;
  overflow: hidden;
`;
