import { ImageComponent } from "../ImageComponent/ImageComponent";

const propsLogo = {
    src: "assets/logo-trail.svg",
    alt: "Trail - home page",
    preLoading: true,
};

export const Logo = () => {
    return (
        <ImageComponent props={ propsLogo }/>
    );
};