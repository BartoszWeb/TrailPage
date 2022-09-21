import styled from "styled-components";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";

export const WrapperLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background-color: ${ ({ theme }) => theme.colors.tertiaryColor };
  margin: 0.2em 0;
  padding: 3.5em 2em 2em 2em;
  border-radius: 5px;
  position: relative;

  @media (max-width: 500px) {
    padding: 2.5em;
  }
`;
export const StyledTitle = styled(ParagraphHtml)`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  margin: 0 0 0.5em 0;
`;

export const StyledPost = styled(ParagraphHtml)`
  text-align: left;
  line-height: 1.2;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 60px;
  top: -10px;
  left: 20px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1.5em;
`;


export const StyledLink = styled.a`
  margin: 2em auto 0 auto;
  padding: 0.7em 1.5em;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.colors.primaryColor };
  :hover{
    background-color: #ffea58;
  }
`;