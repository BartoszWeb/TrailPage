import styled from "styled-components";

export const SectionWrapper = styled.div`
  max-width: 49em;
  margin: 5em auto;
  padding: 0 1em;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

export const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;