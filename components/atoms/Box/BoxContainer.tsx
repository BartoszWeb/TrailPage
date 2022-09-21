import styled from "styled-components";

interface Props {
    fontSize?: string,
    fontWeight?: string,
    margin?: string
}

export const BoxContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  text-align: center;
  font-size: ${ ({ fontSize = "1rem" }) => fontSize };
  font-weight: ${ ({ fontWeight = "400" }) => fontWeight };
  margin: ${ ({ margin = "0.2em 0" }) => margin };;
  background-color: ${ ({ theme }) => theme.colors.tertiaryColor };
  padding: 1.5em;
  border-radius: 5px;

  @media (max-width: 19em) {
    padding: 1em;
  }

`;