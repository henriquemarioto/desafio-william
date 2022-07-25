import styled from "styled-components";

export const Form = styled.form`
  padding: 10px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

  > button {
    width: 50%;
  }
`;