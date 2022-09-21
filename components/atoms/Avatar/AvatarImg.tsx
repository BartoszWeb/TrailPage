import styled from "styled-components";
import { ImageComponent } from "../ImageComponent/ImageComponent";

const AvatarWrapper = styled.div`
  margin-top: 1.2em;
`;


export const AvatarImg = ({ path }: { path: string }) => {
    const propsAvatar = {
        src: path,
        alt: "trail's team member avatar",
    };

    return (
        <AvatarWrapper>
            <ImageComponent props={ propsAvatar }/>
        </AvatarWrapper>
    );
};