import styled from "styled-components";

export const TeamSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 6em auto 2em auto;
`;

export const AvatarsWrapper = styled.div`

  margin: 3em auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 43em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SingleAvatarWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-bottom: 1.5em;
`;