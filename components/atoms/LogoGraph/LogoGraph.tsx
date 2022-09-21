import { ImageComponent } from "../ImageComponent/ImageComponent";
import styled from "styled-components"

const LogoTrail = styled.div`
      position: absolute;
      top: -20px;
      left: 15px;
      width: 6em;
    `;

export const LogoGraph = () => {
    const propsLogoGraph = {
        src: "assets/trail-graph.svg",
        alt: "Logo graph - Trail",
        preLoading: true
    };
    
    return (
        <LogoTrail>
            <ImageComponent props={ propsLogoGraph }/>
        </LogoTrail>
    );
};