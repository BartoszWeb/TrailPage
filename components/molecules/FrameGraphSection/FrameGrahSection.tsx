import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { LogoGraph } from "../../atoms/LogoGraph/LogoGraph";
import { BoxContainer } from "../../atoms/Box/BoxContainer";
import { FrameGraph } from "../../atoms/Frame/FrameGraph";
import { GraphAnimation } from "../../atoms/GraphAnimation/GraphAnimation";
import { SkeletonGraph } from "../../atoms/GraphAnimation/SkeletonGraph";

export const FrameGraphSection = ({ graphAnimationSelector }: { graphAnimationSelector: React.RefObject<HTMLDivElement> }) => {
    const [isTriggerGraphAnimation, setIsTriggerGraphAnimation] = useState(false);


    useEffect(() => {
        if (!graphAnimationSelector.current) return;
        const animation = graphAnimationSelector.current;

        gsap.fromTo(animation, { opacity: 0 }, {
            opacity: 1, stagger: 0.2, duration: 1, ease: "easeInOut", scrollTrigger: {
                trigger: animation,
                start: "top bottom",
                onEnter: () => setIsTriggerGraphAnimation(true),
            },
        });
    }, []);


    return (
        <FrameGraph width={ "100%" } padding={ "1.2em 0 0 0" }>
            <LogoGraph/>
            <BoxContainer margin={ "1em 0 0 0" } fontWeight={ "500" }>Best selling pages</BoxContainer>
            { isTriggerGraphAnimation ? <GraphAnimation/> : <SkeletonGraph/> }
        </FrameGraph>
    );
};