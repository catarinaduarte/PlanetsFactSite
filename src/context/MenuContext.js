import React, { useState } from "react";

const createNavContext = () => {
    const NavContext = React.createContext();

    const NavProvider = ({ children }) => {
        const [menuOpen, setMenuOpen] = useState(false);
        return (
            <NavContext.Provider value={{ menuOpen, setMenuOpen }}>
                {children}
            </NavContext.Provider>
        );
    };

    return { NavContext, NavProvider };
};

export const { NavContext, NavProvider } = createNavContext();
