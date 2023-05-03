import styled, { keyframes } from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
    display:none;
    justify-content:center;
    .swiper {
        width: 300px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .swiper-slide {
        background-size: cover;
        background-position: center;
      }
      
      .mySwiper2 {
        height: 80%;
        width: 100%;
      }
      
      .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
      }
      
      .mySwiper .swiper-slide {
        width: 25%;
        height: 100%;
      }
      
      .mySwiper .swiper-slide-thumb-active {

      }
      
      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
    ${mobile({ display: "flex"})};
`


