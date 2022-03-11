/*
    --- Media Queries
        1360px - 85em : Laptop
        1104px - 69em : Laptop (small)
        896px - 56em : Tablet (large)
        800px - 50em : Tablet (medium)
        688px - 43em : Tablet (small)
        560px - 35em : Tablet (mini)
        416px - 26em : Mobile

*/

// Object containing all media query sizes
const sizes = {
    laptop: "85em", // 1360px
    laptopS: "69em", // 1104px
    tabletL: "56em", // 896px
    tabletM: "50em", // 800px
    tabletS: "43em", // 688px
    tabletMini: "32em", //512px
    mobile: "26em", // 416px
};

/**
 * Returns an object containing all media query strings from input sizes
 *
 * @param {Object} sizes - Object of screen sizes
 * @return {Object} - Object containing media query string for all input sizes
 */
const calcScreen = (sizes) => {
    const device = {};

    // Create and return object with all media  query strings
    for (const screenSize in sizes) {
        device[screenSize] = `(max-width: ${sizes[screenSize]})`;
    }

    return device;
};

const screen = calcScreen(sizes);

export default screen;
