import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
  width: 140px;
  height: 140px;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 10;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${({ color }) => color};
  position: absolute;
  overflow: hidden;
  & * {
    margin: 0px;
  }
`;
