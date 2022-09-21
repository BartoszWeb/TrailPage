import styled from "styled-components";

interface Props {
    margin?: string,
    textAlign?: string
}

export const SectionSubtitle = styled.h2<Props>`
  font-weight: ${ ({ theme = "regular" }) => theme.font.regular };
  margin: ${ ({ margin = "0 1.5em 1em 1.5em" }) => margin };
  font-size: 1.3rem;
  text-align: ${ ({ textAlign = "left" }) => textAlign };
  position: relative;
  z-index: 0;

  ::before {
    content: '';
    position: absolute;
    ${ ({ textAlign }) => textAlign ? "right" : "left" }: -30px;
    top: -25px;
    width: 70px;
    height: 80px;
    border-radius: 2px;
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    z-index: -1;
  }
`;