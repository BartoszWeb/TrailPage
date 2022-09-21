import { AvatarImg } from "../../atoms/Avatar/AvatarImg";
import { Time } from "../../atoms/Time/Time";
import { WrapperLink, StyledTitle, StyledPost, AvatarWrapper, AuthorInfo, StyledLink } from "./Post.styles";
import Link from "next/link";

const path = "assets/avatarBDBackgroundGray.png";

export const Post = ({ time, title, post, url }: {time: string, title: string, post: string, url: string}) => {
    return (
        <WrapperLink>
            <AuthorInfo>
                <AvatarWrapper>
                    <AvatarImg path={ path }/>
                </AvatarWrapper>
                <Time time={ time }/>
            </AuthorInfo>
            <StyledTitle>{ title }</StyledTitle>
            <StyledPost>{ post }</StyledPost>
            <Link passHref href={ url }>
                <StyledLink>Read article...</StyledLink>
            </Link>
        </WrapperLink>
    );
};