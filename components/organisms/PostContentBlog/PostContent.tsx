import { ImageComponent } from "../../atoms/ImageComponent/ImageComponent";
import ReactMarkdown from "react-markdown";
import { ImageContentWrapper, PageWrapper, ImageWrapper, Content, PostContentWrapper, PostTitle, ContentWrapper, SideBar, Box } from "./PostContent.style";
interface Post {
    post: { content: string, slug: string, date: string, excerpt: string, image: string, isFeatured: boolean, title: string };
}

export const PostContent = (props: Post) => {
    const { content, title, image, date, slug } = props.post;

    const imagePath = `postsImages/${ slug }/${ image }`;
    const propsToPostImage = {
        src: imagePath,
        alt: title,
    };

    const customRenderers = {
        p(paragraph: any) {
            const { node } = paragraph;
            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return (
                    <ImageContentWrapper>
                        <ImageComponent props={ { src: `postsImages/${ slug }/${ image.properties.src }`, alt: "" } }/>
                    </ImageContentWrapper>
                );
            }
            return <p>{ paragraph.children }</p>;

        },
    };
    return (
        <PageWrapper>
            <PostTitle>{ title }</PostTitle>
            <PostContentWrapper>
                <ContentWrapper>
                    <ImageWrapper>
                        <ImageComponent props={ propsToPostImage }/>
                    </ImageWrapper>
                    <Content>
                        <ReactMarkdown components={ customRenderers }>{ content }</ReactMarkdown>
                    </Content>
                </ContentWrapper>
            </PostContentWrapper>
        </PageWrapper>
    );
};