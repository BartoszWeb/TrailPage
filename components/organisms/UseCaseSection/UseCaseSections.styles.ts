import styled from "styled-components";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";

export const UseCaseSectionWrapper = styled.section`
  max-width: 80em;
  margin: 7em auto 3em auto;
  display: grid;

  @media (max-width: 37.5em) {
    margin: 3.5em auto 3em auto;
    padding-top: 25px;
  }
  @media (max-width: 31, 25em) {
    overflow-x: hidden;
  }
`;

export const StyledButton = styled(ButtonSignUp)`
  margin: 0 auto;
  z-index: 1;
  padding: 1em 2em;

  @media (max-width: 50em) {
    margin-top: 1em;
  }

`;