import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const ButtonSignUp = styled.a`
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
  padding: 1em 2em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 0 0.3em;
  
  &:hover {
    background-color: #ffea58;
  }
`;