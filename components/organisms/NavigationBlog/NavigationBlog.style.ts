import styled from "styled-components";

export const NavigationDesktopBlog = styled.nav`
  background-color: rgb(204, 239, 252, 1);
  display: flex;
  padding: 2em;
  justify-content: space-between;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const ListLeftDesktop = styled.ul`
  display: flex;
  align-items: center;
`;
export const ListRightDesktop = styled.ul`
  display: flex;
  align-items: center;
`;
export const ListItemDesktop = styled.li`
  margin: 0 1em;
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
    background-color: #7b7b7b;
    transition: width 0.5s;
  }

  :hover {
    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
  }
`;
export const StyledButtonDesktop = styled.button`
  margin: 0;
  padding: 0.5em 0.5em;
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;


export const StyledLogoDesktop = styled.a`
  background-color: transparent;
  border: none;
  display: block;
  cursor: pointer;
  width: 120px;
  margin-top: -5px;
`;






export const NavigationMobileBlog = styled.nav`
  display: none;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgb(204, 239, 252, 1);
  z-index: 10;
  padding: 0.9em 0;

  @media (max-width: 1100px) {
    display: block;
  }
`;


export const StyledLogoMobile = styled.a`
  display: block;
  width: 90px;
  margin-top: -5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ListWrapperMobile = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItemMobile = styled.li`
  margin: 0 0.35em;
  list-style: none;
  color: black;
`;