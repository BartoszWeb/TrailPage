import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export function ThemeContext(props: Props) {
    return (
        <ThemeProvider theme={ theme }>
            { props.children }
        </ThemeProvider>
    );
}