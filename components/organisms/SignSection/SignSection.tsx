import styled from "styled-components";
import { MainHeadLine } from "../../atoms/MainHeadLine/MainHeadLine";
import { Subtitle } from "../../atoms/Subtitles/Subtitle";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";

const HeadlineWrapper = styled.header`
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-bottom: 4em;
  padding: 0 10%;
`;

export const SignSection = () => {
    return (
        <>
            <HeadlineWrapper>
                <MainHeadLine>Know your customers and boost your sales</MainHeadLine>
                <Subtitle>Learn your clients` buying pattern</Subtitle>
                <ButtonSignUp href="/signup">SIGN UP FREE</ButtonSignUp>
                <ParagraphHtml textAlign={ "center" } margin={ "1em 0 0 0 " }>No credit card required | No
                    commitment</ParagraphHtml>
            </HeadlineWrapper>
        </>
    );
};