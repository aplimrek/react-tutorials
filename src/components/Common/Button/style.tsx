import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 8px 16px;
  background-color: ${({ color, outlined }: { color: string; outlined: boolean; hoverColor: string }) =>
    outlined ? "#fff" : color};
  border: ${({ color, outlined }: { color: string; outlined: boolean; hoverColor: string }) =>
    outlined ? `1px solid ${color}` : null};
  border-radius: 10px;
  color: ${({ color, outlined }: { color: string; outlined: boolean; hoverColor: string }) =>
    outlined ? color : "#fff"};
  transition: 0.3s all linear;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverColor, outlined }: { color: string; outlined: boolean; hoverColor: string }) =>
      outlined ? "#fff" : hoverColor};
    border: ${({ hoverColor, outlined }: { color: string; outlined: boolean; hoverColor: string }) =>
      outlined ? `1px solid ${hoverColor}` : null};
    border-radius: 10px;
    color: ${({ hoverColor, outlined }: { color: string; outlined: boolean; hoverColor: string }) =>
      outlined ? hoverColor : "#fff"};
  }
`;
