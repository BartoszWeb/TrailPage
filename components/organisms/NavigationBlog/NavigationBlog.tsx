import Link from "next/link";
import { Logo } from "../../atoms/Logo/Logo";
import { DarkModeIcon } from "../../atoms/DarkModeIcon/DarkModeIcon";
import {
    NavigationDesktopBlog,
    StyledLogoDesktop,
    ListItemDesktop,
    ListLeftDesktop,
    ListRightDesktop,
    StyledButtonDesktop,
    NavigationMobileBlog,
    StyledLogoMobile,
    ListItemMobile,
    ListWrapperMobile,
} from "./NavigationBlog.style";

import { Hamburger } from "../../atoms/Hamburger/Hamburger";
import { ModalMenu } from "../MenuMobileBlog/ModalMenu";
import { useContext, useEffect } from "react";
import { HamburgerContext } from "../../../contexts/HamburgerContext";

export const NavigationBlog = () => {
    const context = useContext(HamburgerContext);

    const closeMobileMenu = context.closeMobileMenu;
    const activeMenuMobileBlog = context.activeBlogMobileMenu;


    useEffect(() => {
        if (!activeMenuMobileBlog) return;

        function keyHandler(e: KeyboardEvent) {
            e.key === "Escape" && closeMobileMenu('blog');
        }

        window.addEventListener("keydown", keyHandler);

        return () => {
            window.removeEventListener("keydown", keyHandler);
        };
    }, [activeMenuMobileBlog]);

    return (
        <>
            <NavigationDesktopBlog>
                <ListLeftDesktop>
                    <ListItemDesktop>
                        <Link passHref href="/blog">
                            <StyledLogoDesktop>
                                <Logo/>
                            </StyledLogoDesktop>
                        </Link>
                    </ListItemDesktop>
                </ListLeftDesktop>
                <ListRightDesktop>
                    <ListItemDesktop>
                        <Link passHref href="/contact">
                            <StyledButtonDesktop>Contact</StyledButtonDesktop>
                        </Link>
                    </ListItemDesktop>
                    <ListItemDesktop>
                        <Link passHref href="/login">
                            <StyledButtonDesktop>Log in</StyledButtonDesktop>
                        </Link>
                    </ListItemDesktop>
                    <ListItemDesktop>
                        <Link passHref href="/signup">
                            <StyledButtonDesktop>Sign up</StyledButtonDesktop>
                        </Link>
                    </ListItemDesktop>
                </ListRightDesktop>
            </NavigationDesktopBlog>

            <NavigationMobileBlog>
                <ListWrapperMobile>
                    <ListItemMobile>
                        <Link passHref href="/blog">
                            <StyledLogoMobile onClick={ () => closeMobileMenu('blog') }>
                                <Logo/>
                            </StyledLogoMobile>
                        </Link>
                    </ListItemMobile>
                    <ListItemMobile>
                        <Hamburger page={ "blog" }/>
                    </ListItemMobile>
                </ListWrapperMobile>
            </NavigationMobileBlog>
            <ModalMenu/>


        </>
    );

};