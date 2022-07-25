import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { Container } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  err?: string | undefined;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { title, err, ...rest },
  ref
) => (
  <Container>
    <span>{title}</span>
    <input {...rest} ref={ref} />
    {err && <p>{err}</p>}
  </Container>
);

export const Input = forwardRef(InputDefault);
