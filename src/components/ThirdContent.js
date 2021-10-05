import { useState } from "react";

import Dots from "./Dots";
import {
  Container,
  Content,
  PrevArrow,
  NextArrow,
  BackgroundContainer,
  BackgroundOverlay,
  BackgroundImageContainer,
  BackgroundImage,
} from "./ThirdContentStyles";
import { SliderImagesData } from "../data/ThirdContentSliderImagesData";
import Calculator from "./Calculator";

const ThirdContent = () => {
  const [index, setIndex] = useState(0);

  function bg3Sticky() {
    let container3Y = document.getElementById("container3").offsetTop,
      y = document.documentElement.scrollTop,
      bg3 = document.getElementById("bg3");

    if (y >= container3Y) {
      bg3.style.position = "fixed";
      bg3.style.top = "0";
    } else {
      bg3.style.position = "absolute";
    }
  }

  function nextImage() {
    if (index === SliderImagesData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prevImage() {
    if (index === 0) {
      setIndex(SliderImagesData.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function onViewAnimation() {
    let h2 = document.getElementById("h2"),
      p = document.getElementById("p"),
      container3 = document.getElementById("container3"),
      y = document.documentElement.scrollTop;

    if (y - container3.offsetTop + window.innerHeight > h2.offsetTop) {
      h2.style.animationName = "slide";
    }

    if (y - container3.offsetTop + window.innerHeight > p.offsetTop) {
      p.style.animationName = "slide";
    }
  }

  window.addEventListener("scroll", () => {
    bg3Sticky();
    onViewAnimation();
  });

  return (
    <Container id="container3">
      <Content>
        <h1>another slider image content</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero odit
          praesentium pariatur dicta incidunt vitae molestias modi odio sunt
          quae. Illo esse rem itaque quo odio reiciendis laboriosam? Dolor,
          deleniti. Amet nisi aperiam cupiditate ab a! Quasi eos, reprehenderit
          doloremque aliquid, placeat neque tenetur nulla, porro animi expedita
          blanditiis quia magni cumque dolore quam asperiores? Non unde at
          ullam. Deleniti? Accusamus hic eius soluta fugit commodi, provident
          dolorem excepturi atque, iste repudiandae iure quia obcaecati sint
          natus porro eum cum iusto exercitationem praesentium. Animi dolore,
          impedit quam quis magnam natus. Ea temporibus a placeat nihil, quis
          rem distinctio, accusantium id facere, impedit assumenda! Cum
          aspernatur ducimus eaque provident, ut quos vitae! Et, temporibus
          laudantium possimus inventore mollitia ad sint placeat! Blanditiis
          voluptatum ab sed architecto pariatur consequuntur voluptatibus
          tempore iste sunt suscipit veritatis, nesciunt perspiciatis eaque enim
          in quia tenetur molestias corporis repellendus sint! Perspiciatis
          eaque dolores rerum iste ipsum. Sequi temporibus laboriosam, autem
          accusantium neque animi nobis eligendi omnis saepe ipsa, velit
          incidunt libero dignissimos commodi facilis. Nobis rerum, incidunt
          sapiente voluptatem facere illo praesentium cupiditate eligendi cum
          ea. Similique nam quibusdam iusto. Culpa, laudantium nemo iusto,
          distinctio odit non fugiat minima similique praesentium accusamus
          excepturi, ad cum minus reprehenderit facere nulla asperiores facilis
          doloremque quaerat et itaque repellat. Suscipit, voluptatibus nobis
          asperiores odit nihil possimus labore placeat eveniet, ipsum magni
          doloribus consequuntur impedit aperiam alias totam, quibusdam dolor
          quidem temporibus accusantium. Sit enim dolorem libero autem quidem!
          Consequuntur. Similique dolorum eligendi nobis odit quod labore
          cupiditate consectetur impedit rem rerum, neque reprehenderit dolor
          voluptatibus fuga veritatis natus sed omnis cumque totam molestias
          quaerat provident id! Cum, rem eos! Quia harum, dolorum at quo totam
          sequi impedit hic nemo ipsam nostrum accusamus aliquid voluptatem
          consequuntur fugiat excepturi ut rerum magni, iste consequatur! Eos
          quod optio illum fugiat repellat sapiente. Natus quos neque nulla cum
          quia repellendus necessitatibus aperiam illum, ipsa totam dignissimos
          earum commodi voluptatem id itaque suscipit odit eveniet explicabo
          minima sequi, maxime voluptate vitae ratione? Vitae, doloribus? Cum
          hic, animi laboriosam perferendis, eos facilis corporis consequatur
          id, quaerat enim similique repellendus repudiandae quae perspiciatis
          nostrum doloremque totam quo ex placeat itaque non. Eum placeat id
          dolore explicabo? Praesentium pariatur nesciunt quae fugit aspernatur
          optio dolorem doloremque impedit, corrupti officiis vel voluptates.
          Saepe recusandae, iste autem eum expedita voluptatem commodi ab alias
          fuga illo ut, impedit assumenda ex! Sed nisi voluptates minus
          quibusdam facere porro veniam et illum illo tempora inventore
          voluptatem perferendis placeat officia officiis quod, sequi corporis
          reiciendis accusantium nesciunt natus perspiciatis esse delectus!
          Consequatur, totam. Itaque, repellendus reprehenderit. Pariatur odio
          eligendi ex minima. Eos dolor odit eligendi unde sapiente esse harum.
          Enim ad ipsa adipisci voluptatibus quia suscipit harum saepe,
          exercitationem cumque mollitia nesciunt incidunt.
        </p>
        <PrevArrow onClick={prevImage} />
        <NextArrow onClick={nextImage} />
        <h2 id="h2">Let's try something else</h2>
        <p id="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          ullam perferendis esse harum provident alias minima corrupti ipsam
          rerum asperiores molestias architecto distinctio eos repudiandae
          quaerat. Veniam laboriosam expedita similique. Tempora pariatur
          dolorum iste? Ullam corrupti enim voluptatum cum qui quibusdam. Quidem
          asperiores in dolor pariatur qui nisi exercitationem libero voluptatem
          laboriosam sunt. Reprehenderit inventore aut nostrum dicta ex!
        </p>
        <h3>a random calculator</h3>
        <Calculator />
      </Content>
      <BackgroundContainer id="bg3">
        <Dots index={index} />
        <BackgroundOverlay />
        <BackgroundImageContainer index={index}>
          {SliderImagesData.map((object, index) => {
            return (
              <BackgroundImage key={index} src={object.src} alt={object.alt} />
            );
          })}
        </BackgroundImageContainer>
      </BackgroundContainer>
    </Container>
  );
};

export default ThirdContent;
