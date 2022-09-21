import { LogoGraph } from "../../atoms/LogoGraph/LogoGraph";
import { BoxContainer } from "../../atoms/Box/BoxContainer";
import React from "react";
import { FrameDialog } from "../../atoms/Frame/FrameDialog";
import styled from "styled-components";
import { ArrowDown } from "../../atoms/ArrowDown/ArrowDown";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";

const path = "assets/trail-graph.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3em 0;
`;

const NextStep = () => {
    return (
        <>
            <Wrapper>
                <ArrowDown/>
                <ParagraphHtml margin={ "0 0 0 0.3em" }>then</ParagraphHtml>
            </Wrapper>
        </>
    );
};

export const FrameGraph = () => {
    return (
        <FrameDialog width={ "90%" } margin={ "0 auto 2em auto" }
               padding={ "2em" }>
            <LogoGraph/>
            <BoxContainer><span><b>User visited:</b> “home page“</span></BoxContainer>
            <NextStep/>
            <BoxContainer><span><b>User read article:</b> “How Trail works?“</span></BoxContainer>
            <NextStep/>
            <BoxContainer><span><b>User read article:</b> “How can I boost sales with trail?”</span></BoxContainer>
            <NextStep/>
            <BoxContainer><span><b>User visited page:</b> “User cases”</span></BoxContainer>
            <NextStep/>
            <BoxContainer><span><b>User visited page:</b> “Pricing”</span></BoxContainer>
            <NextStep/>
            <BoxContainer><span><b>User signed up</b></span></BoxContainer>
        </FrameDialog>
    );
};