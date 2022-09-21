import React from "react";
import Lottie from "react-lottie-wrapper";
import animationData from "./HeroAnimationData";
import styled from "styled-components";

export const WrapperAnimation = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  max-height: 100%;
`;

function HeroAnim() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
        <>
            <WrapperAnimation>
                <Lottie tabIndex={ -1 } options={ defaultOptions }/>
            </WrapperAnimation>
        </>
    );
}

export default HeroAnim;