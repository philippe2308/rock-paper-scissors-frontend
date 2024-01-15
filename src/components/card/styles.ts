import styled from "styled-components";

export const Container = styled.div<{ color: string; selected: boolean }>`
  text-align: center;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ color }) => color};
  position: relative;
  height: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: ${({ selected, color }) => (selected ? color : "#fff")};
`;
export const ContainerDisabled = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  background: rgba(122, 122, 122, 0.5);
`;

export const Label = styled.div<{ color: string; selected: boolean }>`
  border-top: 1px solid ${({ color }) => color};
  font-size: 18px;
  padding: 8px;
  margin: 0px;
  width: 100%;
  color: ${({ selected, color }) => (selected ? "#fff" : color)};
  position: absolute;
  bottom: 0;
  background: ${({ selected, color }) => (selected ? color : "#fff")};
`;

export const Image = styled.img`
  width: 200px;
`;
