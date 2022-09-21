import type { NextPage } from "next";
import { useContext, useRef } from "react";
import { Navigation } from "../components/organisms/Navigation/Navigation";
import { SignSection } from "../components/organisms/SignSection/SignSection";
import styled from "styled-components";
import { HamburgerContext } from "../contexts/HamburgerContext";
import { HeroAnimationSection } from "../components/organisms/HeroAnimation/HeroAnimation";
import { DialogAnimationSection } from "../components/organisms/DialogAnimationSection/DialogAnimationSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GraphSection } from "../components/organisms/GraphSection/GraphSection";
import { UseCaseSection } from "../components/organisms/UseCaseSection/UseCaseSection";
import { TeamSection } from "../components/organisms/TeamSection/TeamSection";
import { BlogSection } from "../components/organisms/BlogSection/BlogSection";
import { Footer } from "../components/organisms/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

export const Content = styled.main`
  &.hidden {
    visibility: hidden;
  }
`;

const HomePage: NextPage = () => {
    const allSections = useRef<HTMLDivElement>(null);

    const context = useContext(HamburgerContext);
    const menuMobileActive = context.activeMobileMenu;

    useEffect(() => {
        if (window.innerHeight < 800) return;

        const sections = Array.from((allSections.current as HTMLElement).children);
        sections.splice(0, 2);
        sections.pop();
        sections.forEach(section => {
            gsap.fromTo(section, { y: "100", opacity: 0.5 }, {
                y: 0, opacity: 1, stagger: 0.2, duration: 1.3, ease: "easeInOut", scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                },
            });
        });
    }, []);

    return (
        <div>
            <Navigation/>
            <Content ref={ allSections } className={ menuMobileActive ? "hidden" : "" }>
                <SignSection/>
                <HeroAnimationSection/>
                <DialogAnimationSection/>
                <GraphSection/>
                <UseCaseSection/>
                <TeamSection/>
                <BlogSection/>
                <Footer/>
            </Content>
        </div>
    );
};

export default HomePage;