import React from "react";
// Components
import BackgroundStars from "components/BackgroundStars";
import Header from "components/Header.js";
import PlanetInfo from "components/PlanetInfo";

const Planets = () => {
    return (
        <BackgroundStars>
            <Header />
            <PlanetInfo />
        </BackgroundStars>
    );
};

export default Planets;
