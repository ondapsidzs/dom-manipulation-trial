import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;
export const ClickedImageContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;
export const ClickedImage = styled.img`
  align-self: center;
  height: 400px;
  width: 50%;
  background: white;
  object-fit: cover;
  object-position: center;
`;
export const ExitButton = styled(IoClose)`
  position: absolute;
  right: 0;
  margin: 20px;
  height: 50px;
  width: auto;
  cursor: pointer;
`;
export const Content = styled.div`
  padding: 100px;
  width: 40%;

  > h1 {
    font-size: 10rem;
    text-align: right;
  }

  > p {
    line-height: 150%;
    text-align: justify;
    text-indent: 50px;
  }
`;
export const BackgroundContainer = styled.div`
  z-index: -10;
  position: fixed;
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
