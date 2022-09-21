import styled from "styled-components";

export const PostTitle = styled.h2`
  margin-top: 1em;
  font-size: 3.5rem;
  text-align: center;
`;

export const PostContentWrapper = styled.div`
  max-width: 49em;
  margin: 3em auto;
  padding: 0 1em;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }

`;

export const PageWrapper = styled.div`
  max-width: 68em;
  margin: 0 auto;
  @media (max-width: 68em) {
    margin-top: 7em;
  }
`;

export const SideBar = styled.aside`;
  display: flex;
  justify-content: center;
  @media (max-width: 50em) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
`;

export const Content = styled.div`

  p {
    font-size: 1.2rem;
    line-height: 1.2em;
    margin-bottom: 1em;
  }
`;
export const ImageWrapper = styled.div`
  margin-bottom: 1em;
`;
export const Box = styled.div`
  border: 1px dashed midnightblue;
  width: 90%;
  height: 800px;
`;
export const ImageContentWrapper = styled.div`
  width: 85%;
  margin: 1em auto;
`;