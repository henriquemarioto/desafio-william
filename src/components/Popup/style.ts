import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000088;
  padding: 15px 0;

  display: flex;
  /* align-items: center; */
  justify-content: center;

  animation: show 500ms;

  @keyframes show {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  > div {
    width: 85%;
    max-width: 420px;
    background-color: ${(p) => p.theme.colors.white};
    border-radius: 5px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h3 {
        font-size: 22px;
        font-weight: bold;
      }

      > button {
        width: 30px;
        height: 30px;
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;