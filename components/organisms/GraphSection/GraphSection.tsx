import React, { useRef } from "react";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { TrailSteps } from "../../atoms/TrailSteps/TrailSteps";
import { GraphSectionWrapper, GridTwoColumns, LeftColumn, RightColumn } from "./GraphSection.styles";
import { FrameGraphSection } from "../../molecules/FrameGraphSection/FrameGrahSection";


export const GraphSection = () => {
    const graphAnimationSelector = useRef<HTMLDivElement>(null);
    return (
        <>
            <GraphSectionWrapper>
                <SectionSubtitle textAlign={ "right" }>
                    Highlight the content which has the greatest impact on sales
                </SectionSubtitle>
                <GridTwoColumns>
                    <LeftColumn ref={ graphAnimationSelector } className="lottie-GraphAnimation">
                        <FrameGraphSection graphAnimationSelector={ graphAnimationSelector }/>
                    </LeftColumn>
                    <RightColumn>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.6rem" }>
                            Look at pages which have the largest share of sales
                        </ParagraphHtml>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.3rem" }
                            fontWeight={ "400" }
                            margin={ "1em 0 0 0" }>
                            Trail shows you which pages are most often visited by buying users.
                        </ParagraphHtml>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.6rem" }
                            fontWeight={ "600" }
                            margin={ "1em 0 0 0" }>
                            Make these pages more visible
                        </ParagraphHtml>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.3rem" }
                            fontWeight={ "400" }
                            margin={ "1.3em 0 3.5em 0" }>
                            You can highlight these pages and boost your sales.
                        </ParagraphHtml>
                        <ButtonSignUp href="/signup">SIGN UP FREE</ButtonSignUp>
                        <TrailSteps/>
                    </RightColumn>
                </GridTwoColumns>
            </GraphSectionWrapper>
        </>
    );
};