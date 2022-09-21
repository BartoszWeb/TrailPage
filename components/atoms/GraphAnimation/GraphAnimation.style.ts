import styled, { keyframes } from "styled-components";

export const SkeletonGraphContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  width: 100%;
  padding: 2em 2em 2em 1em;

`;
export const SkeletonBar = styled.div`
  width: 0;
  height: 40px;
  margin: 4px 20px;
`;

export const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  align-items: center;
`;

export const SkeletonParagraph = styled.p`
  max-width: 100%;
  font-size: 0.8rem;
  height: calc(0.8rem * 1 * 2);
  overflow: hidden;
  text-align: right;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  width: 100%;
  padding: 2em 2em 2em 1em;
`;
interface Props {
    width: string,
}
export const Bar = styled.div<Props>`
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -ms-perspective: 1000px;
  perspective: 1000px;
  width: 0;
  height: 40px;
  margin: 4px 20px;
  background-color: #004264;
  position: relative;
  display: inline-block;
  animation-name: ${ props => transform(props.width) };
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  :before {
    content: "";
    height: 40px;
    width: 20px;
    background-color: #79c6e8;
    position: absolute;
    left: 100%;
    top: -10px;
    transform: skew(0, -45deg);
  }

  :after {
    content: "";
    width: 100%;
    height: 20px;
    background-color: #00a2d2;
    position: absolute;
    top: -20px;
    left: 10px;
    transform: skew(-45deg);
  }

`;
export const transform = (width: string) => keyframes`

  100% {
    width: ${ width };
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
`;

export const Paragraph = styled.p`
  max-width: 100%;
  font-size: 0.8rem;
  height: calc(0.8rem * 1 * 2);
  overflow: hidden;
  text-align: right;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;