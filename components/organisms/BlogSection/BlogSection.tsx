import Link from "next/link";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { Post } from "../../molecules/Post/Post";
import { BlogSectionWrapper } from "./BlogSection.styles";
import { GridPosts } from "./BlogSection.styles";
import { ButtonWrapper } from "./BlogSection.styles";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";


export const BlogSection = () => {
    return (
        <>
            <BlogSectionWrapper id="blog">
                <SectionSubtitle>Have a look at our blog posts</SectionSubtitle>
                <GridPosts>
                    <Post
                        time="10.01.2023"
                        title="Case studies how Trail boosted sales."
                        post="If you know the customer's Trail before buying you can get real benefits. For example, company X noticed that most of the users visited a specific web page on the blog before buying a product. This information helped raise sales by 50% because of a slight improvement on the website."
                        url="/"
                    />

                    <Post
                        time="17.01.2023"
                        title="How to boost sales with Trail."
                        post="Users who bought your products followed specific patterns. Very often they visited the same pages, clicked on the same buttons. Those who didn't buy followed other patterns. If you get to know their precise buying patterns you will be able to transform potential customers into buying ones."
                        url="/"
                    />

                    <Post
                        time="22.01.2023"
                        title="Why do you need to know the customers' Trail of sales?"
                        post="The knowledge about how your customer thinks, what exactly they are looking for, and information they needed before buying is crucial to boost your sales. This knowledge helps you to develop your business faster, how to improve your products and how to transform new visitors into customers more effectively."
                        url="/"
                    />

                    <Post
                        time="28.01.2023"
                        title="How to improve the best pages and get more customers."
                        post="There are many methods to highlight the most important content on your website. The simplest and most effective way is to move this content to the top of the page. Over 50% of users even don't scroll to the bottom of the page if the content on the top is not attractive enough."
                        url="/"
                    />
                </GridPosts>
                <ButtonWrapper>
                    <Link href="/blog" passHref>
                        <ButtonSignUp href="/">VISIT TRAIL`S BLOG</ButtonSignUp>
                    </Link>
                </ButtonWrapper>
            </BlogSectionWrapper>
        </>
    );

};