import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bgColor?: string;
  children?: ReactNode;
}

const Button = ({ bgColor, children, color, ...rest }: Props) => (
  <Container bgColor={bgColor} color={color} {...rest}>
    {children}
  </Container>
);

export default Button;
