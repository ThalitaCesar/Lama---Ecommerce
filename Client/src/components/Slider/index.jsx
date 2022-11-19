import React, { useState } from "react";
import { 
    ArrowLeftOutlined, 
    ArrowRightOutlined 
} from "@material-ui/icons";
import { 
    Arrow, 
    Button, 
    Container, 
    Desc, 
    Image, 
    ImgContainer, 
    InfoContainer, 
    Slide, 
    Title, 
    Wrapper 
} from "./styles";
import bg from '../../assets/Group 69.png'


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  
    return (
      <Container>
        {/* <Arrow 
        direction="left" 
        onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow> */}
        {/* <Wrapper slideIndex={slideIndex}> */}
  
            {/* <Slide> */}
              {/* <ImgContainer>
                <Image src={bg} />
              </ImgContainer> */}
              <iframe src="https://player.vimeo.com/video/211320748?h=356ff4a513" autoplay width="1800" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            {/* </Slide> */}
        {/* </Wrapper> */}
        {/* <Arrow 
        direction="right" 
        onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow> */}
      </Container>
    );
  };
  
  export default Slider;