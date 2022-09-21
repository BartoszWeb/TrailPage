import { GraphWrapper, Wrapper, Paragraph, Bar } from "./GraphAnimation.style";

export const GraphAnimation = () => {
    return (
        <GraphWrapper>
            <Wrapper>
                <Paragraph>www.trail.com/contact</Paragraph>
                <Bar width={ "10%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/how-to-install-trail-on-the-website</Paragraph>
                <Bar width={ "20%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/blog</Paragraph>
                <Bar width={ "30%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/demo-app</Paragraph>
                <Bar width={ "40%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/why-do-you-need-to-know-the-customers</Paragraph>
                <Bar width={ "50%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/customers-reviews</Paragraph>
                <Bar width={ "60%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/case-studies-how-trail-boosted-sales</Paragraph>
                <Bar width={ "70%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/3-ways-to-expose-most-important-contents</Paragraph>
                <Bar width={ "80%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/how-to-improve-the-best-pages-and-get-more-customers</Paragraph>
                <Bar width={ "90%" }/>
            </Wrapper>
        </GraphWrapper>
    );
};