import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 10px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.values.box_shadow};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ContainerAddPeople = styled.div`
  padding: 5px;

  display: flex;
  align-items: center;

  > button {
    width: auto;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;

    display: flex;
    gap: 5px;
    align-items: center;

    > svg {
      color: ${(p) => p.theme.colors.green};
    }
  }
`;

export const ContainerPeopleList = styled.div`
  border: 2px solid ${(p) => p.theme.colors.white_0};
  border-radius: 5px;
`;

export const PeopleList = styled.ul`
  
  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > li {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    > div:nth-of-type(1) {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 5px;

      > img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        object-fit: cover;
      }

      > span {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
