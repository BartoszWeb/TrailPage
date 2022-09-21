import styled from "styled-components";

export const DialogSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto 1em auto;
`;

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.3fr;
  margin-top: 5em;

  @media (max-width: 69em) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 37.5em) {
    margin-top: 2em;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2em auto 0 auto;
  @media (max-width: 69em) {
    width: 90%;
  }

`;

export const RightColumn = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-top: calc(600 / 550 * 100%);
  justify-content: center;

  @media (max-width: 69em) {
    display: none;
  }
`;