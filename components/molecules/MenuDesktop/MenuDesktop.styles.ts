import styled from "styled-components";

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLogo = styled.button`
  background-color: transparent;
  border: none;
  display: block;
  cursor: pointer;
  width: 150px;
  margin-top: -5px;
`;
export const StyledLink = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  @media (max-width: 75em) {
    padding: 0.2em;
  }
`;
export const ListItem = styled.li`
  margin: 0 0.25em;
  list-style: none;
  color: black;
  position: relative;

  :after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 120%;
    left: 0;
    background-color: #ffde00;
    transition: width 0.5s;
  }

  :hover {
    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
  }
`;