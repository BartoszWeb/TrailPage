import styled from "styled-components";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { ButtonLogin } from "../../atoms/ButtonLogin/ButtonLogin";
import { ButtonDashboard } from "../../atoms/ButtonDashboard/ButtonDashboard";
import { ThemeTypes } from "../../../styles/theme";

interface Props {
    margin?: string,
}

export const MenuNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  pointer-events: none;
  opacity: 0;
  transition: opacity .1s .1s ease-in-out;

  &.active {
    opacity: 1;
    pointer-events: all;
    transition: opacity .1s .1s ease-in-out;
    z-index: 9;
  }
  @media (max-width: 69em) {
    display: flex;
  }

`;

export const ListItem = styled.li<Props>`
  display: block;
  margin: ${ ({ margin = "0 0.3em" }) => margin };
  list-style: none;
  text-align: center;
`;

export const List = styled.ul`
  @media screen and (max-width: 50em) and (orientation: landscape) {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
  }

`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 0.7em;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${ ({ theme }: ThemeTypes) => theme.colors.textColor };
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.secondaryColor };
  border: none;
  margin: 0 0.3em;

  @media screen and (orientation: landscape) {
    padding: 10px;
    width: 150px;
  }

  :hover {
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    border-radius: 5px;
  }

`;
export const StyledButtonSignUp = styled(ButtonSignUp)`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 1em;
  font-size: 1.1rem;

  @media screen and (orientation: landscape) {
    padding: 10px;
    width: 150px;

  }
`;

export const StyledButtonLogin = styled(ButtonLogin)`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 1em;
  font-size: 1.1rem;

  @media screen and (orientation: landscape) {
    padding: 10px;
    width: 150px;

  }
`;

export const StyledButtonDashboard = styled(ButtonDashboard)`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 1em;
  font-size: 1.1rem;

  @media screen and (orientation: landscape) {
    width: 150px;
    padding: 10px;
    margin: 0;

  }
`;