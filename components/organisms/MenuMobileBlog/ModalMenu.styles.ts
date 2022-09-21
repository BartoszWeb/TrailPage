import styled from "styled-components";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { ButtonLogin } from "../../atoms/ButtonLogin/ButtonLogin";

export const ButtonDemo = styled.a`
  background-color: ${ ({ theme }) => theme.colors.accentColor };
  font-weight: 400;
  padding: 1em 2em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
;
  
  &:hover {
    background-color: rgb(228, 247, 255);
`;

export const MenuNav = styled.nav`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${ ({ theme }) => theme.colors.accentColor };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity .1s .1s ease-in-out;

  &.active {
    pointer-events: all;
    opacity: 1;
    transition: opacity .1s .1s ease-in-out;
    z-index: 9;
  }
`;

interface Props {
    margin?: string;
}

export const ListItem = styled.li<Props>`
  display: block;
  margin: ${ ({ margin = "0.5em 0.3em" }) => margin };
  list-style: none;
  text-align: center;
`;

export const List = styled.ul`
  @media screen and (max-width: 800px) and (orientation: landscape) {
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
  width: 240px;
  padding: 0.7em;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${ ({ theme }) => theme.colors.textColor };
  background-color: ${ ({ theme }) => theme.colors.accentColor };
  border: none;

  @media screen and (orientation: landscape) {
    padding: 0.8em;
    width: 230px;
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

export const StyledButtonDemo = styled(ButtonDemo)`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 1em;
  font-size: 1.1rem;
  background-color: ${ ({ theme }) => theme.colors.primaryColor };

  @media screen and (orientation: landscape) {
    width: 150px;
    padding: 10px;
    margin: 0;

  }
`;