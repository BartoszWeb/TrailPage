import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  div, span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;