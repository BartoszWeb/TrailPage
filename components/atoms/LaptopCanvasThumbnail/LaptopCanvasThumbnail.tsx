import { WrapperSVG } from "../LaptopCanvas/LaptopCanvas.styles";
import { StyledPlayIcon, VideoThumbnail } from "./LaptopCanvasThumbnail.styles";
import { useEffect, useRef } from "react";
import { ImageComponent } from "../ImageComponent/ImageComponent";


const propsPlay = {
    src: "assets/play.svg",
    alt: "Play video",
};


export const LaptopCanvasThumbnail = ({
                                          fetchYoutubeVideo,
                                          setFetchYoutubeVideo,
                                      }: { fetchYoutubeVideo: boolean, setFetchYoutubeVideo: any }) => {
    const playIconSelector = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!playIconSelector.current) return;
        if (fetchYoutubeVideo) return;
        const selector = playIconSelector.current;

        function loadVideoHandler(e: KeyboardEvent) {
            if (e.key === "Enter" || "Space") {
                setFetchYoutubeVideo(true);
            }
        }

        selector.addEventListener("keydown", loadVideoHandler);
        return () => selector.removeEventListener("keydown", loadVideoHandler);

    }, []);


    return (
        <WrapperSVG>
            <VideoThumbnail alt="Thumbnail of video with Trail`s use case"
                            src="./assets/thumbnail.svg"/>
            <StyledPlayIcon ref={ playIconSelector } onClick={ () => setFetchYoutubeVideo(true) }>
                <ImageComponent props={ propsPlay }/>
            </StyledPlayIcon>
        </WrapperSVG>
    );
};