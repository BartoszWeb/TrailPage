import { useContext, useEffect } from "react";
import { NavigationDesktop } from "./Navigation.styles";
import { MenuDesktop } from "../../molecules/MenuDesktop/MenuDesktop";
import { SignPanelDesktop } from "../../molecules/SignPanelDesktop/SignPanelDesktop";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import { ModalMenu } from "../MenuMobile/ModalMenu";
import {
    ListItem,
    ListWrapper,
    StyledLogo,
    NavigationMobile,
} from "./Navigation.styles";
import Link from "next/link";
import { Logo } from "../../atoms/Logo/Logo";
import { Hamburger } from "../../atoms/Hamburger/Hamburger";

export const Navigation = () => {
    const context = useContext(HamburgerContext);
    const activeMenuMobile = context.activeMobileMenu;
    const closeMobileMenu = context.closeMobileMenu;


    useEffect(() => {
        if (!activeMenuMobile) return;

        function keyHandler(e: KeyboardEvent) {
            e.key === "Escape" && closeMobileMenu();
        }

        window.addEventListener("keydown", keyHandler);

        return () => {
            window.removeEventListener("keydown", keyHandler);
        };
    }, [activeMenuMobile]);

    return (
        <>
            <NavigationDesktop>
                <MenuDesktop/>
                <SignPanelDesktop/>
            </NavigationDesktop>

            <>
                <NavigationMobile>
                    <ListWrapper>
                        <ListItem>
                            <Link passHref href="/">
                                <StyledLogo onClick={ () => closeMobileMenu()}>
                                    <Logo/>
                                </StyledLogo>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Hamburger page={ "landing" }/>
                        </ListItem>
                    </ListWrapper>
                </NavigationMobile>
                <ModalMenu/>
            </>
        </>
    );
};