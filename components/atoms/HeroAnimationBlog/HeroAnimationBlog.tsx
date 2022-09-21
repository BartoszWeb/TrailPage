import Lottie from "react-lottie-wrapper";
import animationData from "./HeroAnimationData";
import { WrapperAnimation } from "../HeroAnimation/HeroAnimation";

function HeroAnimation() {
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

export default HeroAnimation;