import React from "react";
import styled from "styled-components";
// Icon
import SvgIconHamburger from "components/svg/HamburgerMenuIcon";

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
`;

const HamburgerButton = ({ onClick, color }) => {
    return (
        <MenuButton onClick={onClick}>
            <SvgIconHamburger fill={color} />
        </MenuButton>
    );
};

export default HamburgerButton;
