import styled from "styled-components";

export const SectionWrapper = styled.header`
  max-width: 100%;
  display: grid;
  padding: 0 10%;
  grid-gap: 0 2em;
  grid-template-columns: 1.2fr 1fr;
  background-color: ${ ({ theme }) => theme.colors.accentColor };
  @media (max-width: 69em) {
    margin-top: 4.5em;
  }
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    padding-bottom: 3em;
  }
`;

export const DemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
`;
export const WrapperAnimation = styled.div`
  width: 100%;
  margin: 0 auto 1em auto;
  padding-top: calc(800 / 1200 * 100%);
  position: relative;
  display: flex;
  justify-content: center;
`;