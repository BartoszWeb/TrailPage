import { ImageComponent } from "../ImageComponent/ImageComponent";
import styled from "styled-components";

const propsToSVG = {
    src: "assets/trail-steps.svg",
    alt: 'animal trail'
};
const StyledTrailSteps = styled.div`
  position: absolute;
  width: 18.7em;
  z-index: -1;
  left: -10%;

  @media (max-width: 62.5em) {
    left: 70%;
    width: 12.5em;
  }
`;
export const TrailSteps = () => {
    return (
        <StyledTrailSteps>
            <ImageComponent props={ propsToSVG }/>
        </StyledTrailSteps>
    );
};