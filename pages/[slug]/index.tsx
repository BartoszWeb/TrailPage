import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { Footer } from "../../components/organisms/Footer/Footer";
import { PostContent } from "../../components/organisms/PostContentBlog/PostContent";
import { NavigationBlog } from "../../components/organisms/NavigationBlog/NavigationBlog";

const postsDirectory = path.join(process.cwd(), "posts");

interface Post {
    post: { content: string, slug: string, date: string, excerpt: string, image: string, isFeatured: boolean, title: string };
}

function PostDetailPage(props: Post) {
    return (
        <>
            <Head>
                <title>{ props.post.title }</title>
                <meta name="description" content={ props.post.excerpt }/>
            </Head>
            <NavigationBlog/>
            <PostContent post={ props.post }/>
            <Footer/>
        </>
    );
}

export function getStaticProps(context: any) {
    const { params } = context;
    const { slug } = params;

    const postSlug = slug.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, `${ postSlug }.md`);

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };

}

export function getStaticPaths() {
    const postFiles = fs.readdirSync(postsDirectory);
    const slugs = postFiles.map((fileName) => fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default PostDetailPage;