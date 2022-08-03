import React from "react";
import { ButtonContainer } from "./style";

type ButtonProps = {
  title: string;
  outlined?: boolean;
  size?: "normal" | "fullwidth";
  onClick: () => any;
};

const PrimaryButton = ({ title, outlined = false, size = "normal", onClick = () => {} }: ButtonProps) => {
  return (
    <ButtonContainer
      color="#0c7ef9"
      hoverColor="#00448c"
      outlined={outlined}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </ButtonContainer>
  );
};

export default PrimaryButton;
