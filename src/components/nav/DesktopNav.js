import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { planetList } from "data/planetsList";
// Themes
import colors from "styles/colors";
// Media Query
import screen from "styles/screens";

const NavEl = styled.nav`
    @media ${screen.laptopS} {
        width: 100%;
    }
`;

const NavList = styled.ul`
    display: flex;
    gap: 4.8rem;
    list-style: none;

    @media ${screen.laptopS} {
        justify-content: space-between;
    }

    @media ${screen.tabletM} {
        gap: 3.2rem;
    }
`;

const NavItem = styled.li`
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;

    a {
        border-bottom: 4px solid transparent;
        border-top: 4px solid transparent;
        color: ${colors.lightgrey};
        padding: 3.2rem 0;
        text-decoration: none;

        @media ${screen.laptopS} {
            font-size: 1.2rem;
            padding-bottom: 2.5rem;
        }
    }

    .active {
        color: #fff;
        border-top: 4px solid ${({ activeColor }) => activeColor};

        @media ${screen.laptopS} {
            border-top: none;
            border-bottom: 4px solid ${({ activeColor }) => activeColor};
        }
    }
`;

const DesktopNav = ({ navOnClick }) => {
    // Get name of planet from url
    const { planet } = useParams();
    // Get primary color of planet
    const planetColor = colors[planet].primary;

    return (
        <NavEl>
            <NavList>
                {planetList.map((planet, index) => {
                    return (
                        <NavItem activeColor={planetColor} key={index}>
                            <NavLink
                                to={"/" + planet}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                onClick={navOnClick}>
                                {planet}
                            </NavLink>
                        </NavItem>
                    );
                })}
            </NavList>
        </NavEl>
    );
};

export default DesktopNav;
