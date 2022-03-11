import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavProvider } from "context/MenuContext";

// Components
import Planets from "pages/Planets";
import { PageStateProvider } from "context/PageContext";

function App() {
    // TODO: Reset states when media query breakpoints are reached
    return (
        <NavProvider>
            <PageStateProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/mercury" />} />
                    <Route path="/:planet" element={<Planets />} />
                </Routes>
            </PageStateProvider>
        </NavProvider>
    );
}

export default App;
