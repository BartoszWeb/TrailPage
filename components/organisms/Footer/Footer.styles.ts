import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 6em;
  background-color: black;
`;
export const ContentWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  padding: 4em 4em 2.5em 4em;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 3em 4em 2.5em 4em;
  }
`;

export const SingleItem = styled.div`
  @media (max-width: 43em) {
    margin-bottom: 1.5em;
  }
`;
export const TermsWrapper = styled.div`
  max-width: 62.5em;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`;

export const StyledLogo = styled.button`
  width: 160px;
  margin-top: -10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const WrapperParagraph = styled.div`
  width: 10em;
`;
export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  align-items: center;
  justify-content: flex-start;
`;

export const Line = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-items: center;
  height: 1px;
  background-color: white;
`;
export const TermsUl = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: row;
  margin: 1em 0 2em 0;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 43em) {
    margin: 1em auto;
    flex-direction: column;
    justify-content: center;
  }
`;