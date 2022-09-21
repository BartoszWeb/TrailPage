import Link from "next/link";
import { Logo } from "../../atoms/Logo/Logo";
import { ListItem, MenuContainer, StyledLogo, StyledLink } from "./MenuDesktop.styles";

export const MenuDesktop = () => {
    return (
        <MenuContainer>
            <ListItem>
                <Link passHref href="/">
                    <StyledLogo>
                        <Logo/>
                    </StyledLogo>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/#how-it-works">
                    <StyledLink>How it works</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/#use-cases">
                    <StyledLink>Use Cases</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/#our-team">
                    <StyledLink>Our Team</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/blog">
                    <StyledLink>Blog</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/#contact">
                    <StyledLink>Contact</StyledLink>
                </Link>
            </ListItem>
        </MenuContainer>
    );
};