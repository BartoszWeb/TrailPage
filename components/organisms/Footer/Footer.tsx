import Link from "next/link";
import { LogoReversColors } from "../../atoms/Logo/LogoReverseColors";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";
import { FooterItem } from "../../atoms/FooterItem/FooterItem";
import {
    Column,
    ContentWrapper,
    FooterWrapper, Line,
    SingleItem,
    StyledLogo, TermsUl,
    TermsWrapper,
    WrapperParagraph
} from "./Footer.styles";

export const Footer = () => {
    return (
        <FooterWrapper id="contact">
            <ContentWrapper>
                <SingleItem>
                    <Link passHref href="/">
                        <StyledLogo>
                            <LogoReversColors/>
                        </StyledLogo>
                    </Link>
                    <WrapperParagraph>
                        <ParagraphHtml margin={ "-0.1em 0 0 0.7em" } color={ "white" } fontSize={ "1.2rem" } textAlign={ "left" }>Get
                            to know your customers better.</ParagraphHtml>
                    </WrapperParagraph>
                </SingleItem>
                <SingleItem>
                    <ParagraphHtml margin={ "1em 0 0 0" } color={ "white" } fontSize={ "1.4rem" }
                                   textAlign={ "center" }>Contact:</ParagraphHtml>
                    <Column>
                        <FooterItem href={ "/" } title={ "support@trailofsales.com" }/>
                    </Column>
                </SingleItem>
                <SingleItem>
                    <ParagraphHtml margin={ "1em 0 0 0" } color={ "white" } fontSize={ "1.4rem" }
                                   textAlign={ "center" }>Product:</ParagraphHtml>

                    <Column>
                        <FooterItem href={ "/" } title={ "Pricing" }/>
                        <FooterItem href={ "/" } title={ "Customer reviews" }/>
                    </Column>
                </SingleItem>
                <SingleItem>
                    <ParagraphHtml margin={ "1em 0 0 0" } color={ "white" } fontSize={ "1.4rem" }
                                   textAlign={ "center" }>Resources:</ParagraphHtml>
                    <Column>
                        <FooterItem href={ "/blog" } title={ "Blog" }/>
                        <FooterItem href={ "/" } title={ "Case studies" }/>
                        <FooterItem href={ "/" } title={ "Videos" }/>
                    </Column>
                </SingleItem>
            </ContentWrapper>
            <TermsWrapper>
                <Line/>
                <TermsUl>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "Cookies" }/>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "Privacy" }/>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "Terms" }/>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "@2022 Technologies, Inc" }/>
                </TermsUl>
            </TermsWrapper>
        </FooterWrapper>
    );
};