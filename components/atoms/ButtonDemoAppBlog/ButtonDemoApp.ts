import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const ButtonDemoApp = styled.a`
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
  padding: 0.8em 2em;
  border: none;
  font-size: 1.3rem;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  letter-spacing: 1.5px;

  :hover {
    background-color: #fce34c;
  }
  @media (max-width: 800px) {
    padding: 0.6em 1.2em;
    font-size: 1.2rem;
  }
`