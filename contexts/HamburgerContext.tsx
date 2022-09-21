import React, { createContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const HamburgerContext = createContext({
    activeMobileMenu: false,
    activeBlogMobileMenu: false,
    openMobileMenu: function (blog?: string) {
    },
    closeMobileMenu: function (blog?: string) {
    },
});


export const HamburgerContextProvider = (props: Props) => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);
    const [activeBlogMobileMenu, setActiveBlogMobileMenu] = useState(false);

    function openMobileMenu(blog?: string) {
        blog ? setActiveBlogMobileMenu(true) : setActiveMobileMenu(true);
    }

    function closeMobileMenu(blog?: string) {
        blog ? setActiveBlogMobileMenu(false) : setActiveMobileMenu(false);
    }

    const context = {
        activeMobileMenu,
        activeBlogMobileMenu,
        openMobileMenu,
        closeMobileMenu,
    };

    return (
        <HamburgerContext.Provider value={ context }>
            { props.children }
        </HamburgerContext.Provider>
    );
};