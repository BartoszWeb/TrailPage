import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";

export const ButtonDashboard = styled.a`
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.accentColor };
  font-weight: 400;
  padding: 1em 2em;
  margin: 0 0.3em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
;
  
  &:hover {
    background-color: rgb(228, 247, 255);
`;