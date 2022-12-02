import React from "react";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import { Zoom, Navigation } from "swiper";

export default function SliderMobile() {


  return (
    <Container className="swiper-container">

<Swiper
       style={{
        "--swiper-navigation-color": "#e61919",
        "--swiper-pagination-color": "#fff",
      }}
       navigation={true}
       zoom={true}
        modules={[Zoom, Navigation]} className="mySwiper">
  
         <SwiperSlide className="swiper-slide">
          <div className="swiper-zoom-container">
            <img src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284725d9569a24e6f415912bb191d03569ac78_thumbnail_600x.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-zoom-container">
            <img src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284727afe8c41215207c9f58c78df2bf3e4da2_thumbnail_600x.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-zoom-container">
            <img src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284729855dd0c2030f19a7c48b8e0ba6e7694f_thumbnail_600x.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-zoom-container">
            <img src="https://img.ltwebstatic.com/images3_pi/2021/11/19/1637284726d84f00501ca36f7197380ab18e1907b4_thumbnail_600x.webp" />
          </div>
        </SwiperSlide>
  </Swiper>
    
    </Container>
  );
}
