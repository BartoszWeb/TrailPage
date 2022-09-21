import Lottie from "react-lottie-wrapper";
import dialogAnimation from "./DialogAnimationData";
import styled from "styled-components";

const WrapperAnimation = styled.div`
  margin: -2em auto 0 auto;
  width: 100%;
  position: absolute;
  top: 0;
  max-height: 100%;
`;


function DialogAnimation({ state }: { state: { isStopped: boolean, isPaused: boolean } }) {
    const defaultOptions = {
        loop: false,
        autoplay: false,
        isPaused: true,
        isStopped: true,
        animationData: dialogAnimation,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    };
    console.log(state);
    return (
        <>
            <WrapperAnimation>
                <Lottie tabIndex={ -1 } options={ defaultOptions }
                             isStopped={ state.isStopped }
                             isPaused={ state.isPaused }/>
            </WrapperAnimation>
        </>
    );
}

export default DialogAnimation;