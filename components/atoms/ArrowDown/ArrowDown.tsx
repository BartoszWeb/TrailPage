import { ImageComponent } from "../ImageComponent/ImageComponent";
import { ArrowSize } from "./ArrowDown.styles";

const propsLogo = {
    src: "assets/arrow-down.svg",
    alt: "arrow-down",
    preLoading: true,
};

export const ArrowDown = () => {
    return (
        <ArrowSize className="bounce2">
            <ImageComponent props={ propsLogo }/>
        </ArrowSize>
    );
};