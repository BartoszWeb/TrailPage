import React, { useEffect, useRef, useState } from "react";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { DialogSectionWrapper } from "./DialogAnimationSection.styles";
import { FrameGraph } from "../../molecules/FrameDialogSection/FrameDialogSection";
import { GridTwoColumns } from "./DialogAnimationSection.styles";
import { LeftColumn } from "./DialogAnimationSection.styles";
import { RightColumn } from "./DialogAnimationSection.styles";
import { gsap } from "gsap";

import dynamic from "next/dynamic";

const DynamicDialogAnimation = dynamic(() => import("../../atoms/DialogAnimation/DialogAnimation"));

interface AnimationProps {
    isStopped: boolean,
    isPaused: boolean,
}

export const DialogAnimationSection = () => {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [animationState, setAnimationState] = useState({} as AnimationProps);

    const dialogAnimationSelector = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 800) {
            const animation = dialogAnimationSelector.current;
            gsap.fromTo(animation, { opacity: 0 }, {
                opacity: 1, stagger: 0.2, duration: 1, ease: "easeInOut", scrollTrigger: {
                    trigger: animation,
                    start: "top 90%",
                    onEnter: () => setAnimationState({ isStopped: false, isPaused: false }),
                    onEnterBack: () => setAnimationState({ isStopped: false, isPaused: false }),
                },
            });
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth > 800) {
            setIsDesktop(true);
        }
    }, []);

    return (
        <>
            <DialogSectionWrapper id="how-it-works">
                <SectionSubtitle>Discover the customers` shopping trail</SectionSubtitle>
                <GridTwoColumns ref={ dialogAnimationSelector } className="lottie-dialogAnimation">
                    <LeftColumn>
                        <FrameGraph/>
                        <ButtonSignUp href="/signup">SIGN UP FREE</ButtonSignUp>
                    </LeftColumn>
                    {
                        isDesktop &&
                        <RightColumn>
                            <DynamicDialogAnimation state={ animationState }/>
                        </RightColumn>
                    }
                </GridTwoColumns>
            </DialogSectionWrapper>
        </>
    );
};