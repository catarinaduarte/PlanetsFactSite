import React, { useState } from "react";

const createPageStateContext = () => {
    const PageStateContext = React.createContext();

    const PageStateProvider = ({ children }) => {
        const [view, setView] = useState("overview");

        return (
            <PageStateContext.Provider value={{ view, setView }}>
                {children}
            </PageStateContext.Provider>
        );
    };

    return { PageStateContext, PageStateProvider };
};

export const { PageStateContext, PageStateProvider } = createPageStateContext();
