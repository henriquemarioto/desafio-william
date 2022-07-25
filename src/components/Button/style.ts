import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.button<Props>`
  color: ${(p) => p.color || p.theme.colors.black};
  background-color: ${(p) => p.bgColor || p.theme.colors.white_0};
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  transition: 400ms;

  :hover {
    color: ${(p) => p.bgColor || p.theme.colors.white};
    background-color: ${(p) => p.color || p.theme.colors.black};
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;
