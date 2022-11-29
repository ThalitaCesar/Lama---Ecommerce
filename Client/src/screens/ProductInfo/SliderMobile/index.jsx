import { Slide } from "@material-ui/core";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Arrow, Container, Image, ImgContainer, Wrapper } from "./styles";

export default function SliderMobile() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
      }
    };

  return (
    <Container className="swiper-container">
       <Arrow
        direction="left" 
        onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow> 

        <Wrapper slideIndex={slideIndex}>
  
            <Slide>         
              <Image src="https://img.ltwebstatic.com/images2_pi/2019/01/09/1547020566483223847_thumbnail_600x799.webp"/>
             </Slide>
             </Wrapper>


             {/* <Wrapper slideIndex={slideIndex}> */}

            {/* <Slide>
              <ImgContainer>
              <Image src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284725d9569a24e6f415912bb191d03569ac78_thumbnail_600x.webp"/>
              </ImgContainer> 
              </Slide>
              </Wrapper>

              <Wrapper slideIndex={slideIndex}>
            <Slide>
              <ImgContainer>
              <Image src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284727afe8c41215207c9f58c78df2bf3e4da2_thumbnail_600x.webp"/>
              </ImgContainer> 
              </Slide>
              </Wrapper>

              <Wrapper slideIndex={slideIndex}>
            <Slide>
              <ImgContainer>
              <Image src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284729855dd0c2030f19a7c48b8e0ba6e7694f_thumbnail_600x.webp"/>
              </ImgContainer> 
                </Slide>
                </Wrapper>

                <Wrapper slideIndex={slideIndex}>
            <Slide>
              <ImgContainer>
              <Image src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284726d84f00501ca36f7197380ab18e1907b4_thumbnail_600x.webp"/>
              </ImgContainer> 
             </Slide>
    
        </Wrapper> */}
         <Arrow 
        direction="right" 
        onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
    
    </Container>
  );
}
