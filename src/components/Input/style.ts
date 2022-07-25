import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > input {
    padding: 5px;
    border: 1px solid #00000044;
    border-radius: 5px;
  }

  > p {
    font-size: 12px;
    color: ${p => p.theme.colors.red};
  }
`;