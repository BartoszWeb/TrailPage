import styled from "styled-components";

interface Props {
    width?: string,
    margin?: string,
    padding?: string
}

export const FrameDialog = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  position: relative;
  width: ${ ({ width = "70%" }) => width };
  margin: ${ ({ margin }) => margin };
  padding: ${ ({ padding }) => padding };

  @media (max-width: 19em) {
    padding: 10px;
    width: 90%;
    margin: 0 auto;
  }

  ::before {
    content: '';
    background-color: white;
    display: block;
    position: absolute;
    top: -13px;
    left: 10px;
    width: 100px;
    height: 30px;
  }

  @media (max-width: 31em) {
    width: 100%;
  }
`;