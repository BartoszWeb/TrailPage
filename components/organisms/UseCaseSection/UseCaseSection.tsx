import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { UseCaseSectionWrapper } from "./UseCaseSections.styles";
import { StyledButton } from "./UseCaseSections.styles";
import { useState } from "react";
import { LaptopCanvasThumbnail } from "../../atoms/LaptopCanvasThumbnail/LaptopCanvasThumbnail";
import { LaptopCanvas } from "../../atoms/LaptopCanvas/LaptopCanvas";

export const UseCaseSection = () => {
    const [fetchYoutubeVideo, setFetchYoutubeVideo] = useState(false);

    return (
        <>
            <UseCaseSectionWrapper id="use-cases">
                <SectionSubtitle>Use cases</SectionSubtitle>
                {
                    fetchYoutubeVideo ? <LaptopCanvas/> :
                        <LaptopCanvasThumbnail fetchYoutubeVideo={ fetchYoutubeVideo }
                                               setFetchYoutubeVideo={ setFetchYoutubeVideo }/>
                }
                <StyledButton href="/signup">SIGN UP FREE</StyledButton>
            </UseCaseSectionWrapper>
        </>
    );
};