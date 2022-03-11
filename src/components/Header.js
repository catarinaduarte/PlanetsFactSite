import React, { useContext, useEffect } from "react";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Medai Query
import screen from "styles/screens";
import useMediaQuery from "@mui/material/useMediaQuery";
// Context
import { NavContext } from "context/MenuContext";
import { PageStateContext } from "context/PageContext";
// Components
import DesktopNav from "components/nav/DesktopNav";
import MobileNav from "components/nav/MobileNav";

const HeaderContainer = styled.header`
    border-bottom: 1px solid ${colors.shade};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem 4.8rem;

    position: relative; // To absolute position mobile navigaiton menu

    @media ${screen.laptopS} {
        flex-direction: column;
        gap: 4.8rem;
        padding: 2.4rem 8rem 2.8rem; //Adjust Nav anchor link padding to change active border
    }

    @media ${screen.tabletM} {
        padding: 2.4rem 4.8rem 2.8rem;
    }

    @media ${screen.tabletS} {
        flex-direction: row;
        padding-left: 6.8rem;
        padding-right: 6.8rem;
    }

    @media ${screen.tabletMini} {
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

const Title = styled.span`
    font-family: "Antonio";
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.15rem;
    text-transform: uppercase;

    @media ${screen.laptopS} {
        font-size: 3.1rem;
    }
`;

const Header = () => {
    // Media query for switching navigation bar
    const tabletS = useMediaQuery(screen.tabletS);

    // Page view context
    const { setView } = useContext(PageStateContext);
    // Menu context
    const { setMenuOpen } = useContext(NavContext);

    // Click handler to reset page view
    const navigationClickHandler = () => {
        setView("overview");
    };

    // Close menu when screen size is larger than 688px
    useEffect(() => {
        !tabletS && setMenuOpen(false);
    }, [tabletS, setMenuOpen]);

    return (
        <HeaderContainer>
            <Title>The Planets</Title>
            {tabletS ? (
                <MobileNav navOnClick={navigationClickHandler} />
            ) : (
                <DesktopNav navOnClick={navigationClickHandler} />
            )}
        </HeaderContainer>
    );
};

export default Header;
