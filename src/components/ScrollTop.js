import styled from "styled-components";

//STYLED_COMPONENTS
export const Container = styled.div`
  z-index: +100;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  h1 {
    font-size: clamp(1rem, 20vw, 20rem);
    line-height: 80%;

    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
  }
`;

//MAIN_RENDER
const ScrollTop = () => {
  //LOGIC

  function scrollDisplay() {
    let y = document.documentElement.scrollTop;
    var h1Display = document.querySelector("h1");

    h1Display.innerHTML = y;
  }

  window.addEventListener("scroll", () => {
    scrollDisplay();
  });

  //RETURN
  return (
    <Container>
      <Content>
        <h1>Hello</h1>
      </Content>
    </Container>
  );
};

export default ScrollTop;
