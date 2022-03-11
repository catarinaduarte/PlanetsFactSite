import React from "react";
import styled from "styled-components";
//Themes
import colors from "styles/colors";
// Media Query
import screen from "styles/screens";
// Components
import { H2, H4 } from "./Headings";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    gap: 4rem;
    grid-column: -1/1;
    margin: 0 auto;
    width: 100%;

    @media ${screen.tabletM} {
        gap: 2.4rem;
    }

    @media ${screen.tabletS} {
        grid-template-columns: 1fr 1fr;
        row-gap: 2rem;
    }

    @media ${screen.tabletMini} {
        grid-template-columns: 1fr;
    }
`;

const StatBox = styled.div`
    border: 1px solid ${colors.shade};
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 2.4rem;
    width: 100%;

    @media ${screen.laptopS} {
        padding: 1.8rem 1.8rem 2.2rem;
    }

    @media ${screen.tabletMini} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

const StatTitle = styled(H4)`
    color: ${colors.grey};
    text-transform: uppercase;

    @media ${screen.tabletMini} {
        font-size: 1.2rem;
    } ;
`;

const StatText = styled(H2)`
    text-transform: uppercase;

    @media ${screen.tabletM} {
        font-size: 3.2rem;
    }

    @media ${screen.tabletS} {
        font-size: 3.6rem;
    }

    @media ${screen.tabletMini} {
        font-size: 4rem;
    }

    @media ${screen.mobile} {
        font-size: 3.2rem;
    }
`;

const PlanetStats = ({ stats }) => {
    const planetStats = [
        { name: "Rotation Time", value: stats.rotation },
        { name: "Revolution Time", value: stats.revolution },
        { name: "Radius", value: stats.radius },
        { name: "Average Temp.", value: stats.temperature },
    ];

    return (
        <Container>
            {planetStats.map((stat, index) => {
                return (
                    <StatBox key={index}>
                        <StatTitle>{stat.name}</StatTitle>
                        <StatText as="p">{stat.value}</StatText>
                    </StatBox>
                );
            })}
        </Container>
    );
};

export default PlanetStats;
