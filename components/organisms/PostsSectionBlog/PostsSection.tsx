import { BlogPost } from "../../molecules/BlogPost/BlogPost";
import { SectionWrapper, PostsList } from "./PostSection.style";
interface Posts {
    posts: { content: string, slug: string, date: string, excerpt: string, image: string, isFeatured: boolean, title: string }[];
}

export const PostsSection = (props: Posts) => {
    const { posts } = props;
    return (
        <SectionWrapper>
            <PostsList>
                { posts.map(post => <BlogPost key={ post.slug } post={ post }/>) }
            </PostsList>

        </SectionWrapper>

    );
};