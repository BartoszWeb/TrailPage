import Lottie from "react-lottie-wrapper";
import React from "react";
import animationData from "./ContactAnimationData";
import styled from "styled-components";

const WrapperAnimation = styled.div`
  max-width: 150px;
  margin: 0 auto;
`;

export const ContactAnimation = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
    };
    return (
        <>
            <WrapperAnimation>
                <Lottie options={ defaultOptions }/>
            </WrapperAnimation>
        </>
    );
    
}