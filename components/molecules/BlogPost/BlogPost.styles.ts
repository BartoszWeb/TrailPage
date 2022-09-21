import styled from "styled-components";

export const Post = styled.li`
  margin-bottom: 4em;
`;

export const ImageWrapper = styled.div`
  margin: 0.5em 0;
`;

export const PostTitle = styled.h2`
  font-size: 2rem;
`;

export const Time = styled.time`
  position: absolute;
  right: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin-bottom: 2em;
`;

export const ButtonReadMore = styled.a`
  cursor: pointer;
  margin-top: 2em;
  padding: 0.8em 1em;
  background-color: ${ ({ theme }) => theme.colors.accentColor };

  :hover {
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
  }
`;