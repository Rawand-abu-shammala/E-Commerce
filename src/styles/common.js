import styled from "styled-components";
export const StyledGrid = styled.div`
  display: grid;
`;
export const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 82%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 780px) {
    width: 95%;
  }
`;
