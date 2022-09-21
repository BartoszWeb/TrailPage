import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { List, MenuNav } from "./ModalMenu.styles";
import { ListItem } from "./ModalMenu.styles";
import { StyledButton } from "./ModalMenu.styles";
import { HamburgerContext } from "../../../contexts/HamburgerContext";


export const ModalMenu = () => {
    const nav = useRef<HTMLElement>(null);

    const context = useContext(HamburgerContext);
    const activeMenuMobile = context.activeBlogMobileMenu;
    const closeMobileMenu = context.closeMobileMenu;

    useEffect(() => {
        if (!nav) return;
        if(!nav.current) return;
        activeMenuMobile
            ? nav.current.classList.add("active")
            : nav.current.classList.remove("active");
    }, [activeMenuMobile]);

    useEffect(() => {
        if (!nav) return;
        if(!nav.current) return;
        const list = nav.current;

        function handleClick(e: MouseEvent) {
            if (e.target === list || list.firstChild) {
                closeMobileMenu("blog");
            }
        }

        list.addEventListener("click", handleClick);

        return () => removeEventListener("click", handleClick);
    }, []);

    return (
        <MenuNav ref={ nav }>
            <List>
                <ListItem>
                    <Link passHref id="link" href="http://demo.trailofsales.com">
                        <StyledButton onClick={ () => closeMobileMenu("blog") }>Demo App</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/blog">
                        <StyledButton onClick={ () => closeMobileMenu("blog") }>Home</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/contact">
                        <StyledButton onClick={ () => closeMobileMenu("blog") }>Contact</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref href="https://www.trailofsales.com/signup">
                        <StyledButton onClick={ () => closeMobileMenu("blog") }>Sign Up</StyledButton>
                    </Link>
                </ListItem>
                <ListItem margin="0.5em 0.3em 0 0.3em">
                    <Link passHref href="https://www.trailofsales.com/login">
                        <StyledButton onClick={ () => closeMobileMenu("blog") }>Log In</StyledButton>
                    </Link>
                </ListItem>
            </List>
        </MenuNav>
    );
};