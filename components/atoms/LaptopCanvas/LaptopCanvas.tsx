import { IframeSVG, WrapperSVG } from "./LaptopCanvas.styles";

export const LaptopCanvas = () => {
    return (
        <WrapperSVG>
            <IframeSVG
                src="https://player.vimeo.com/video/96425312?h=0733f32ca5?rel=0&amp;autoplay=1&mute=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
        </WrapperSVG>
    );
};