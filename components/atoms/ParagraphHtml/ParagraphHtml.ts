import styled from "styled-components";

interface Props {
    textAlign?: string,
    fontWeight?: string,
    margin?: string,
    fontSize?: string,
}

const ParagraphHtml = styled.p<Props>`
  color: ${ ({ color = "black" }) => color };;
  text-align: ${ ({ textAlign = "center" }) => textAlign };
  font-weight: ${ ({ fontWeight = "400" }) => fontWeight };
  margin: ${ ({ margin = "0" }) => margin };
  font-size: ${ ({ fontSize = "1rem" }) => fontSize };
  line-height: 1.1em;
`;

export default ParagraphHtml;