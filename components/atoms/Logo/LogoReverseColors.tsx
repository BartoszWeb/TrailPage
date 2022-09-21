import { ImageComponent } from "../ImageComponent/ImageComponent";
const pathToLogo = "assets/logo-trail-reversColors.svg"

const propsLogo = {
    src: pathToLogo,
    alt: 'Trail - home page',
};


export const LogoReversColors = () => {
    return (
        <ImageComponent props={ propsLogo }/>
    )
};