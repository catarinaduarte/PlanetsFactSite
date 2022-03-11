import styled from "styled-components";
// Media Query
import screen from "styles/screens";

const Section = styled.section`
    padding: 4.8rem 12.8rem;

    @media ${screen.laptop} {
        padding: 7.2rem;
    }

    @media ${screen.laptopS} {
        padding: 4.8rem;
        padding-top: 8rem;
    }

    @media ${screen.tabletS} {
        padding: 6.8rem;
    }

    @media ${screen.tabletMini} {
        padding: 4rem;
    }
`;

export default Section;
