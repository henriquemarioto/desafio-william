import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import { Container } from "./style";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  children: ReactNode;
}

const SelectDefault: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  { title, children, ...rest },
  ref
) => (
  <Container>
    <span>{title}</span>
    <select {...rest} ref={ref}>
      {children}
    </select>
  </Container>
);

export const Select = forwardRef(SelectDefault);
