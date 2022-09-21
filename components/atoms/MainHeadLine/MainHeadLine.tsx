import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";
export const MainHeadLine = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  font-weight: ${ ({ theme }: ThemeTypes) => theme.font.regular };;
  margin: 0.5em 0 0.5em 0;
`;