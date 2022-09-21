import React from "react";
import { ThemeContext } from "./ThemeContext";
import { HamburgerContextProvider } from "./HamburgerContext";
import { NotificationContextProvider } from "./NotificationContext";

interface Props {
    children: React.ReactNode;
}

export function AppContexts(props: Props) {
    return (
        <ThemeContext>
                <NotificationContextProvider>
                    <HamburgerContextProvider>
                        { props.children }
                    </HamburgerContextProvider>
                </NotificationContextProvider>
        </ThemeContext>
    );
}