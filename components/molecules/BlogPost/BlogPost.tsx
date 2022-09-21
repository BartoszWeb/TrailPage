import Link from "next/link";
import { ImageComponent } from "../../atoms/ImageComponent/ImageComponent";
import { ParagraphHtml } from "../../atoms/ParagraphBlog/ParagraphHtml";
import { Post, PostTitle, Time, ImageWrapper, ContentWrapper, ButtonReadMore } from "./BlogPost.styles";


interface Post {
    post: { content: string, slug: string, date: string, excerpt: string, image: string, isFeatured: boolean, title: string };
}

export const BlogPost = (props: Post) => {
    const { title, image, excerpt, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const imagePath = `postsImages/${ slug }/${ image }`;
    const linkPath = `/${ slug }`;
    const propsToPostImage = {
        src: imagePath,
        alt: title,
    };
    return (
        <Post>
            <article>
                <Link href={ linkPath }>
                    <a>
                        <PostTitle>{ title } </PostTitle>
                        <ImageWrapper>
                            <ImageComponent props={ propsToPostImage }/>
                        </ImageWrapper>
                    </a>
                </Link>
                <ContentWrapper>
                    <ParagraphHtml fontSize={ "1.2rem" }>{ excerpt }</ParagraphHtml>
                    <Time>{ formattedDate }</Time>
                </ContentWrapper>
                <Link passHref href={ linkPath }>
                    <ButtonReadMore>Read more...</ButtonReadMore>
                </Link>
            </article>
        </Post>
    );
};