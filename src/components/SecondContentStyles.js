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

  > div {
    text-align: justify;
    margin-bottom: 50px;
    > p {
      display: block;
      line-height: 150%;
      margin-bottom: 50px;
    }

    > span {
      display: inline-block;
      line-height: 150%;
      cursor: default;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;

      @keyframes fade {
        0% {
          opacity: 1;
          transform: translate(0, 0) rotate(0);
        }
        100% {
          display: none;
          opacity: 0;
          transform: translate(100px, -100px) rotate(360deg);
        }
      }
    }
  }
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
export const BackgroundImage = styled.img`
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
export const SliderImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SliderImages = styled.div`
  margin: 0 30px;
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
export const SliderImage = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: black;
  object-fit: cover;
  object-position: center;
  opacity: ${(props) =>
    props.alt === `Photo ${props.imageIndex + 1}` ? 1 : 0};
  transform: ${(props) =>
    props.alt === `Photo ${props.imageIndex + 1}` ? "scale(1.05)" : ""};
  transition: 0.5s all ease-out;
`;
export const PrevArrow = styled(FiArrowLeft)`
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.4s all ease-in-out;
    transition-property: transform;
  }
`;
export const NextArrow = styled(FiArrowRight)`
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.4s all ease-in-out;
    transition-property: transform;
  }
`;
