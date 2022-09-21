import { ButtonDemoApp } from "../../atoms/ButtonDemoAppBlog/ButtonDemoApp";
import { MainHeadline } from "../../atoms/MainHeadLine/MainHeadLineBlog";
import { ParagraphHtml } from "../../atoms/ParagraphBlog/ParagraphHtml";
import { WrapperAnimation, DemoWrapper, SectionWrapper } from "./HeroSection.styles";
import HeroAnimationBlog from "../../atoms/HeroAnimationBlog/HeroAnimationBlog";
import Link from "next/link";
export const HeroSectionBlog = () => {
    return (
        <SectionWrapper>
            <WrapperAnimation>
                <HeroAnimationBlog/>
            </WrapperAnimation>
            <DemoWrapper>
                <MainHeadline>Have a look at Trail`s demo</MainHeadline>
                <ParagraphHtml fontSize={ "1.2rem" } fontSizeMedia={ "1rem" } margin={ "0 0 1em 0" }>Demo with dummy
                    data</ParagraphHtml>
                <Link passHref href="https://demo.trailofsales.com">
                    <ButtonDemoApp>Trail`s Demo</ButtonDemoApp>
                </Link>
            </DemoWrapper>
        </SectionWrapper>
    );
};