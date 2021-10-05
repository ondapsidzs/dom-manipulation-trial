import { useState, useRef } from "react";

import image1 from "../images/image_1.jpg";
import {
  Container,
  ClickedImageContainer,
  ClickedImage,
  ExitButton,
  Content,
  BackgroundImage,
  BackgroundContainer,
  BackgroundOverlay,
} from "./FirstContentStyles";

const FirstContent = () => {
  const [active, setActive] = useState(false);
  const srcRef = useRef("");

  function activeImage(e) {
    setActive(!active);
    srcRef.current = e.target.src;
  }

  function disableActiveImage() {
    setActive(!active);
    srcRef.current = "";
  }

  return (
    <Container>
      {active ? (
        <ClickedImageContainer onClick={disableActiveImage}>
          <ClickedImage src={srcRef.current ? srcRef.current : ""} />
          <ExitButton />
        </ClickedImageContainer>
      ) : (
        ""
      )}

      <Content>
        <h1 onClick={() => console.log(srcRef.current)}>hi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum
          provident. Quasi molestiae quidem veritatis quas, assumenda facere
          quos nulla eligendi dolor aspernatur! Sequi ad vel ullam. Quia,
          delectus alias? Reprehenderit dolor earum recusandae omnis! Aliquam
          itaque debitis accusamus error laboriosam incidunt officia explicabo
          eaque est rem? Ex sapiente veritatis error corrupti itaque amet enim
          explicabo qui expedita. Atque, autem? Placeat in nihil porro quaerat
          odit. Sint officiis, veniam quod exercitationem quis doloribus
          laudantium similique nemo ullam explicabo, nulla modi, reiciendis illo
          atque quaerat. Ex quidem architecto assumenda deleniti sed. Fugit
          nihil necessitatibus maiores cum consectetur facilis commodi excepturi
          soluta enim, quo officiis dolores dolorem, consequuntur eligendi
          deleniti quia veritatis corrupti. Exercitationem nulla beatae tempora
          sapiente facilis error quasi aliquam? Ab, aliquid! Obcaecati,
          cupiditate accusamus non beatae maxime, labore adipisci aut,
          exercitationem distinctio incidunt similique ex laudantium sit? Maxime
          laboriosam earum ex in voluptas labore adipisci error sunt eaque quos.
          Reprehenderit alias eaque voluptates veritatis consequatur consectetur
          iste, maiores labore veniam velit eveniet illo rerum corrupti adipisci
          quasi eligendi dolorum in aperiam ratione perferendis fugit aut
          facere. Dolore, animi expedita! Consequuntur iste natus eveniet,
          minima inventore iure deserunt ipsa. Autem repellendus quam, error,
          dolorem vel pariatur dolorum culpa maiores aliquid accusamus tenetur
          fugit iure? Quas, debitis. Qui at soluta sint.
        </p>
      </Content>
      <BackgroundContainer>
        <BackgroundOverlay />
        <BackgroundImage src={image1} />
      </BackgroundContainer>
    </Container>
  );
};

export default FirstContent;
