import styled from "styled-components";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimationWrapper = styled.section`
  max-width: 92.5em;
  margin: 0 auto 4em auto;
  padding-top: calc(350 / 1163 * 100%);
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 50em) {
    display: none;
  }
`;

const DynamicHeroAnim = dynamic(() => import("../../atoms/HeroAnimation/HeroAnimation"));


export const HeroAnimationSection = () => {
    const [isDesktop, setIsDesktop] = useState<null | boolean>(null);

    useEffect(() => {
        if (window.innerWidth > 800) {
            setIsDesktop(true);
        }
    }, [isDesktop]);

    return (
        <AnimationWrapper>
            { isDesktop && <DynamicHeroAnim/> }
        </AnimationWrapper>
    );
};