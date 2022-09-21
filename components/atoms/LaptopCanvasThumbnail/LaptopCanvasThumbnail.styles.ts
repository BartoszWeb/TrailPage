import styled from "styled-components";

export const VideoThumbnail = styled.img`
  background: url(${ "/assets/laptop-canvas.svg" }) center center no-repeat;
  box-sizing: border-box;
  background-size: contain;
  padding: 13.2% 17.6% 14.4% 16.6%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;

  @media (max-width: 50em) {
    padding: 13.9% 17.5% 14.9% 16.4%;
  }

  @media (max-width: 37.5em) {
    padding: 14.9% 17.5% 15.9% 16.4%;
  }

  @media (max-width: 28em) {
    padding: 15.5% 17.5% 16.9% 16.4%;
  }

  @media (max-width: 23em) {
    padding: 16.5% 17.5% 17.5% 16.4%;
  }

  @media (max-width: 17.5em) {
    padding: 16.9% 17.5% 18% 16.4%;
  }
`;

export const StyledPlayIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 37.5em) {
    width: 80px;
  }
`;