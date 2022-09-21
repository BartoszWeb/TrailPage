import { HeroSectionBlog } from "../../components/organisms/HeroSectionBlog/HeroSection";
import { PostsSection } from "../../components/organisms/PostsSectionBlog/PostsSection";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Footer } from "../../components/organisms/Footer/Footer";
import styled from "styled-components";
import { NavigationBlog } from "../../components/organisms/NavigationBlog/NavigationBlog";
import Head from "next/head";

interface Posts {
    posts: { content: string, slug: string, date: string, excerpt: string, image: string, isFeatured: boolean, title: string }[];
}

const Content = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;
`;

function BlogPage(props: Posts) {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Trailofsales`s blog"/>
            </Head>
            <NavigationBlog/>
            <Content>
                <HeroSectionBlog/>
                <PostsSection posts={ props.posts }/>
                <Footer/>
            </Content>
        </>
    );

}

export function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), "posts");
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map((postFile) => {
        const filePath = path.join(postsDirectory, postFile);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        const postSlug = postFile.replace(/\.md$/, "");
        const postData = {
            slug: postSlug,
            ...data,
            content,
        };
        return postData;
    });

    return {
        props: {
            posts: allPosts,
        },
    };

}

export default BlogPage;