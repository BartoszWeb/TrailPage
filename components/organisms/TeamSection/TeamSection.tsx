import { TeamSectionWrapper, AvatarsWrapper, SingleAvatarWrapper } from "./TeamSection.styles";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { AvatarImg } from "../../atoms/Avatar/AvatarImg";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";

const pathToBartoszPng = "assets/avatarBD.png";

export const TeamSection = () => {
    return (
        <TeamSectionWrapper id="our-team">
            <SectionSubtitle textAlign={ "right" }>Our Team</SectionSubtitle>
            <AvatarsWrapper>
                <SingleAvatarWrapper>
                    <ParagraphHtml fontSize={ "18px" } textAlign={ "center" }>Bartosz</ParagraphHtml>
                    <AvatarImg path={ pathToBartoszPng }/>
                </SingleAvatarWrapper>
            </AvatarsWrapper>
        </TeamSectionWrapper>
    );
};