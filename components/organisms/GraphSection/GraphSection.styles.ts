import styled from "styled-components";

export const GraphSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 6em auto 3em auto;
`;
export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin-top: 5em;
  padding: 5px;
  @media (max-width: 62.5em) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 37.5em) {
    margin-top: 3.5em;
  }
`;

export const LeftColumn = styled.div`
  position: relative;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  padding: 0 6em;
  position: relative;
  overflow: hidden;

  @media (max-width: 62.5em) {
    margin-top: 3em;
    padding: 0 3em;

  }

  @media (max-width: 31em) {
    padding: 0 3em;
  }
`;