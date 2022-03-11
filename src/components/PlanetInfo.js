import React, { useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// Themes
import colors from "styles/colors";
// Media Query
import screen from "styles/screens";
// Images
import { planetImages } from "images/planetImages";
import sourceIcon from "images/icon-source.svg";
// Data
import * as data from "data/planetData.json";
// Context
import { NavContext } from "context/MenuContext";
// Components
import Section from "components/Section";
import { H1 } from "components/Headings";
import PageStateNav from "components/nav/PageStateNav";
import PlanetStats from "components/PlanetStats";
import { PageStateContext } from "context/PageContext";

// Styled Components

const MainSection = styled(Section)`
    display: ${({ visibility }) => (visibility ? "none" : "block")};
`;

const Grid = styled.div`
    display: grid;
    row-gap: 6rem;
    column-gap: 4.8rem;
    grid-template-columns: 1fr 35rem;
    justify-items: center;
    margin: 0 auto;
    max-width: 140rem;

    @media ${screen.laptopS} {
        grid-template-columns: 1fr;
        row-gap: 4.8rem;
    }

    @media ${screen.tabletMini} {
        display: flex;
        flex-direction: column;
    }
`;

const PlanetImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${screen.laptopS} {
        height: 47.2rem;
    }
`;

const Image = styled.img`
    max-height: 55rem;

    @media ${screen.laptop} {
        max-height: 50rem;
    }

    @media ${screen.laptopS} {
        max-height: 45rem;
    }

    @media ${screen.tabletMini} {
        transform: scale(0.8);
    }

    @media ${screen.mobile} {
        transform: scale(0.7);
    }
`;

const SurfaceImage = styled.img`
    height: 19.9rem;
    position: absolute;
    transform: translateY(90%);
`;

const PlanetInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    @media ${screen.laptopS} {
        display: grid;
        align-items: center;
        gap: 8rem;
        grid-template-columns: 3fr 2fr;
        width: 100%;
    }

    @media ${screen.tabletM} {
        gap: 5.6rem;
    }

    @media ${screen.tabletS} {
        grid-template-columns: 1fr;
        gap: 4rem;
    }
`;

const HeadingPrimary = styled(H1)`
    margin-bottom: 3.2rem;
`;

const PlanetDescriptionBox = styled.div`
    /* Fixing height may break if there is too many characters in description
        - Also see Source component */
    height: 37rem;
    position: relative;

    @media ${screen.laptopS} {
        height: 35rem;
    }

    @media ${screen.tabletS} {
        height: auto;
    }
`;

const Description = styled.p`
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin-bottom: 1.6rem;

    @media ${screen.lapotopS} {
        font-size: 1.55rem;
        margin-bottom: 4rem;
    }
`;

const Source = styled(Description)`
    color: ${colors.grey};
    margin-bottom: 1rem;

    /* Fixing position may break if there is too many characters in description
        - Also see PlanetDescriptionBox component */
    position: absolute;
    bottom: 0rem;

    @media ${screen.laptopS} {
        position: static;
    }

    @media ${screen.tabletS} {
    }
`;

const Link = styled.a`
    &:link,
    &:visited {
        color: ${colors.grey};
        font-weight: 700;
    }
`;

const PlanetInfo = () => {
    // Nav menu context
    const { menuOpen } = useContext(NavContext);

    // Media query states
    const tabletS = useMediaQuery(screen.tabletS);

    // State to control what image is displayed
    const { view, setView } = useContext(PageStateContext);

    // Create object of imported planet data
    const allPlanetsData = data;

    // Placeholder for: Extract id of planet from url
    const { planet: id } = useParams();

    // Query for selected planet from all planets data
    const planetData = allPlanetsData[id];
    // Query for selected planet image
    const planetImage = planetImages[id];

    return (
        <>
            {tabletS && (
                <PageStateNav
                    activeColor={colors[id]}
                    clickHandler={setView}
                    view={view}
                />
            )}
            <MainSection visibility={menuOpen}>
                <Grid>
                    <PlanetImageBox>
                        <Image
                            src={
                                view === "structure"
                                    ? planetImage.structure
                                    : planetImage.overview
                            }
                            alt={
                                view === "structure"
                                    ? `Planet ${planetData.name} with half planet cutout to show internal structure`
                                    : `Planet ${planetData.name} from space`
                            }
                        />
                        {view === "geology" && (
                            <SurfaceImage
                                src={planetImage.geology}
                                alt={"Surface of " + planetData.name}
                            />
                        )}
                    </PlanetImageBox>
                    <PlanetInfoBox>
                        <PlanetDescriptionBox>
                            <HeadingPrimary>{planetData.name}</HeadingPrimary>
                            <Description>
                                {planetData[view].content}
                            </Description>
                            <Source>
                                Source :{" "}
                                <Link href={planetData[view].source}>
                                    Wikipedia{" "}
                                    <img src={sourceIcon} alt="Icon" />
                                </Link>
                            </Source>
                        </PlanetDescriptionBox>
                        {!tabletS && (
                            <PageStateNav
                                activeColor={colors[id]}
                                clickHandler={setView}
                                view={view}
                            />
                        )}
                    </PlanetInfoBox>
                    <PlanetStats stats={planetData} />
                </Grid>
            </MainSection>
        </>
    );
};

export default PlanetInfo;
