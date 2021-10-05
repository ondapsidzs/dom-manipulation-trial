import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;
export const Content = styled.div`
  padding: 100px;
  width: 40%;

  > h1 {
    font-size: 10rem;
    text-align: right;
    margin-bottom: 30px;
  }

  > p {
    line-height: 150%;
    text-align: justify;
    text-indent: 50px;
    margin-bottom: 30px;

    &:nth-of-type(2) {
      opacity: 0;
      animation-name: "";
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;

      @keyframes slide {
        0% {
          opacity: 0;
          transform: translateX(200px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }

  > h2 {
    font-size: 4rem;
    margin: 50px 0;
    opacity: 0;
    animation-name: "";
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    @keyframes slide {
      0% {
        opacity: 0;
        transform: translateX(200px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  > h3 {
    margin-top: 50px;
    font-size: 2rem;
  }
`;
export const PrevArrow = styled(FiArrowLeft)`
  height: 50px;
  width: auto;
  margin-right: 30px;
  cursor: pointer;
`;
export const NextArrow = styled(FiArrowRight)`
  height: 50px;
  width: auto;
  cursor: pointer;
`;
export const BackgroundContainer = styled.div`
  z-index: -10;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;
export const BackgroundOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.2)
  );
`;
export const BackgroundImageContainer = styled.div`
  white-space: nowrap;
  z-index: -5;
  position: absolute;
  height: 100%;
  width: 100%;
  transform: ${(props) => `translateX(calc(-100% * ${props.index}))`};
  transition: 0.5s all ease-in-out;
  transition-property: transform;
`;
export const BackgroundImage = styled.img`
  display: inline-block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
