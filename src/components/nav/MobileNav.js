import React, { useContext } from "react";
import styled from "styled-components";
// Theme
import colors from "styles/colors";
// Images
import chevronIcon from "images/icon-chevron.svg";
// Context
import { NavContext } from "context/MenuContext";
// Components
import HamburgerButton from "./HamburgerButton";
import { planetList } from "data/planetsList";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
    background-color: ${colors.main};
    height: 100vh;
    padding: 4.8rem;
    width: 100%;

    position: absolute;
    left: 0;
    top: 8.5rem;
    visibility: hidden;
    z-index: 9999;

    &.open {
        visibility: visible;
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style: none;
`;

const NavItem = styled.li`
    display: flex;
    align-items: center;
    gap: 3.6rem;

    border-bottom: 1px solid ${colors.shade};
    height: 12.5%;
    padding: 2.4rem;

    &:last-child {
        border-bottom: none;
    }
`;

const CircleIcon = styled.span`
    border-radius: 50%;
    background-color: ${({ color }) => color};
    height: 4rem;
    width: 4rem;
    display: inline-block;
`;

const NavItemTitle = styled.span`
    font-size: 15px;
    font-weight: 700;
`;

const ChevronIcon = styled.img`
    margin-left: auto;
`;

const MobileNav = ({ navOnClick }) => {
    // Navigaiton variable
    const navigate = useNavigate();
    // Menu state
    const { menuOpen, setMenuOpen } = useContext(NavContext);

    const menuButtonClickHandler = () => {
        setMenuOpen(!menuOpen);
    };

    const navClickHandler = (planet) => {
        navOnClick();
        setMenuOpen(false);
        navigate("/" + planet);
    };

    return (
        <>
            <HamburgerButton
                onClick={menuButtonClickHandler}
                color={menuOpen ? "#44445a" : "#fff"}
            />
            <Nav className={menuOpen ? "open" : ""}>
                <NavList>
                    {planetList.map((planet) => {
                        return (
                            <NavItem
                                onClick={() => {
                                    navClickHandler(planet);
                                }}
                                key={planet}>
                                <CircleIcon color={colors[planet].primary} />
                                <NavItemTitle
                                    style={{ textTransform: "uppercase" }}>
                                    {planet}
                                </NavItemTitle>
                                <ChevronIcon
                                    src={chevronIcon}
                                    alt="Chevron icon"
                                />
                            </NavItem>
                        );
                    })}
                </NavList>
            </Nav>
        </>
    );
};

export default MobileNav;
