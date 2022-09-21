import styled from "styled-components";

export const BlogSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 6em auto 2em auto;
  @media (max-width: 600px) {
    margin-top: 4em;
  }
`;

export const GridPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  margin-top: 3em;
  grid-gap: 2.5em;
  padding: 2em;
  
  
  @media (max-width: 44em) {
    grid-template-columns: 1fr;
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;