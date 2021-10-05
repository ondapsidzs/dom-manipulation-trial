import { useState, useEffect, useRef } from "react";

import image2 from "../images/image_2.jpg";
import {
  Container,
  Content,
  BackgroundContainer,
  BackgroundImage,
  BackgroundOverlay,
  SliderImageContainer,
  PrevArrow,
  SliderImages,
  SliderImage,
  NextArrow,
} from "./SecondContentStyles";
import { SliderImagesData } from "../data/SliderImagesData";

const SecondContent = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  function floatingText() {
    let floatingLettersDiv = document.getElementById("floatingLettersDiv"),
      floatingLetters = document.getElementById("floatingLetters"),
      floatingLettersInnerHTML = floatingLetters.innerHTML,
      letterArray = [];

    for (let i = 0; i < floatingLettersInnerHTML.length; i++) {
      letterArray.push(floatingLettersInnerHTML[i]);
    }

    floatingLetters.style.display = "none";

    for (let i = 0; i < letterArray.length; i++) {
      let floatingLettersSpan = document.createElement("span");
      floatingLettersSpan.innerHTML = letterArray[i];

      if (letterArray[i] === " ") {
        floatingLettersSpan.style.display = "inline";
      }

      floatingLettersSpan.addEventListener("mouseover", () => {
        floatingLettersSpan.style.animationName = "fade";
      });
      floatingLettersDiv.appendChild(floatingLettersSpan);
    }
  }

  function test1() {
    let container2Y = document.getElementById("container2").offsetTop,
      y = document.documentElement.scrollTop,
      bg2 = document.getElementById("bg2");

    if (y >= container2Y) {
      bg2.style.position = "fixed";
      bg2.style.top = "0";
    } else {
      bg2.style.position = "absolute";
      bg2.style.top = container2Y;
    }
  }

  function prevImage() {
    if (imageIndex === 0) {
      setImageIndex(3);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  function nextImage() {
    if (imageIndex === SliderImagesData.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  useEffect(() => {
    test1();
  });

  useEffect(floatingText, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setImageIndex((prevImageIndex) =>
          prevImageIndex === SliderImagesData.length - 1
            ? 0
            : prevImageIndex + 1
        ),
      5000
    );
    return () => {
      resetTimeout();
    };
  }, [imageIndex]);

  window.addEventListener("scroll", test1);

  return (
    <Container id="container2">
      <Content>
        <h1>slider image content</h1>
        <div id="floatingLettersDiv">
          <p id="floatingLetters">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
            repudiandae nulla culpa, velit unde autem optio asperiores.
            Reprehenderit, expedita iusto facere ex quos assumenda quisquam quia
            laboriosam eaque! Consequuntur! Veniam explicabo dignissimos velit
            architecto consequatur dolor. Molestiae, fuga! Quos possimus
            architecto, a ullam corrupti quisquam aliquid delectus repellendus
            excepturi et est vitae esse ratione. Nihil incidunt odit voluptas
            ad. Soluta repellendus et voluptatum accusamus ipsa dolor aliquid
            fugit natus. Deserunt expedita explicabo minima, animi cumque quos a
            repudiandae veniam pariatur ea, porro laudantium officiis, possimus
            deleniti quas eveniet earum? Vitae error, officiis aut illo expedita
            sit quasi totam perferendis quas beatae ipsam vel. Tempora quae
            voluptatum commodi necessitatibus impedit atque quasi! Consequatur,
            et vero voluptas quidem similique voluptatem libero. Fugit,
            blanditiis quasi. Velit, dolorum voluptatibus mollitia illo enim
            iure eaque architecto totam, molestias amet rem corporis laboriosam
            assumenda facilis. Illo, veritatis adipisci aspernatur nemo in quas
            deserunt iusto labore! Debitis sed inventore, aspernatur alias
            doloribus deleniti rem laboriosam omnis nulla illo totam vel saepe
            ratione iste tempore nam reiciendis facilis corporis fugit velit
            deserunt ipsam adipisci. Doloribus, tempore labore! Dolorem eligendi
            pariatur iste nihil. Vel, hic odio. Fugit beatae quaerat rerum
            soluta nemo, maiores distinctio nostrum maxime doloremque animi!
            Voluptatem hic consequatur quae quibusdam consequuntur numquam ad
            nemo ipsa. Harum iste laudantium repellat sint amet quisquam illum
            voluptatem sapiente accusantium labore magni minima a ullam
            deleniti, minus repudiandae maiores ratione beatae vitae, nihil hic.
            Vitae excepturi quidem reprehenderit possimus. Hic vero libero,
            accusamus ad dolore aliquam repudiandae amet, illo molestiae eveniet
            ab velit error veritatis beatae suscipit tempore commodi laudantium
            exercitationem. Impedit dignissimos velit voluptate minus laboriosam
            ratione repudiandae. Fuga dolorum voluptates ab. Ad facere
            aspernatur, maxime facilis, qui, saepe aliquam quisquam nobis
            accusantium reiciendis ab! Dolorem reprehenderit consequatur
            doloribus quis, animi modi, voluptatum molestiae, quibusdam quia
            quos nulla? Dolore consequatur recusandae quibusdam minus sunt rem,
            voluptates delectus velit veritatis iure veniam pariatur hic ratione
            placeat eum sequi nihil accusantium. Eum reiciendis excepturi, autem
            molestias dignissimos rem corrupti? Officiis. Non debitis porro
            tempora impedit atque dolorem voluptas nostrum doloremque inventore
            unde odio cumque aperiam voluptates sequi excepturi quasi dolor,
            dolore nobis voluptatibus consequuntur amet rerum totam! Deleniti,
            laborum voluptas? Sint autem aliquam error amet sed obcaecati cum
            laudantium dolor labore quisquam minima quibusdam totam, in ea non,
            quos nobis odit fugit saepe neque? Harum consequatur veniam minima
            illum omnis. Aperiam deleniti laboriosam necessitatibus aut sit
            nulla reiciendis corporis corrupti, dolore maiores fuga dolorum
            blanditiis ea fugit vero rerum vitae commodi repudiandae nihil
            voluptas magnam? Repellendus, quo aliquid! Ab, incidunt. Voluptates,
            explicabo! Itaque rem autem modi tempore officia. Ullam
            reprehenderit voluptatem vero deleniti quibusdam natus adipisci
            error eaque, deserunt, ab tempora at assumenda enim eligendi
            incidunt. Dolore qui officia doloribus!
          </p>
        </div>
        <SliderImageContainer>
          <PrevArrow onClick={prevImage} />
          <SliderImages>
            {SliderImagesData.map((object, index) => {
              return (
                <SliderImage
                  key={index}
                  src={object.src}
                  alt={object.alt}
                  imageIndex={imageIndex}
                />
              );
            })}
          </SliderImages>
          <NextArrow onClick={nextImage} />
        </SliderImageContainer>
      </Content>
      <BackgroundContainer id="bg2">
        <BackgroundOverlay />
        <BackgroundImage src={image2} />
      </BackgroundContainer>
    </Container>
  );
};

export default SecondContent;
