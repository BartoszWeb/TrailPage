import styled from 'styled-components';
import { ThemeTypes } from "../../../styles/theme";

export const Subtitle = styled.h2`
  text-align: center;
  font-weight: ${ ({ theme }: ThemeTypes) => theme.font.thin };
  margin-bottom: 1.2em;
`;