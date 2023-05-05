import styled, { keyframes } from "styled-components";
import { mobile } from "../../../styles/responsive";

const aniSlider = keyframes`
from {
  opacity: 0;
} to {
  opacity: 1;
  transition: opacity 0.6s ease;
}
`;

const scaleImage = keyframes`
from {
  transform: scale(.5);
} to {
  transform: scale(1);
}
`;

export const SliderWrapper = styled.div`
  width: 80%;
  height: 520px;
  border: none;
  position: relative;
  ${mobile({ display: "none"})};

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.6s ease;
    & > img {
      width: 100%;
      height: 100%;
    }
    & > img.active {
      animation: ${aniSlider} 0.5s linear forwards;
      cursor: pointer;
    }

    .slide {
      width: 100%;
      height: 100%;
    }

    .slide-active {
      opacity: 1;
    }
  }

  .caption {
    position: absolute;
    width: 100%;
    height: 50px;
    background: #f5f5f5;
    left: 0;
    bottom: 0;
  }

  .btn {
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    border: 0px solid;
    border-radius:20px;
    font-size: 40px;
    color: #e7e7e7;
    border-radius: 5px;
    cursor: pointer;

    &.btn-prev,
    &.btn-next {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      &.btn-next {
        right: 0;
        left: auto;
      }
    }
  }

  .disable {
    color: #9c9c9c;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Wrapper = styled.div`
  max-width: 75%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 60px;
  ${mobile({ display: "none"})};

  .list-dot {
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin-bottom: 35px;
    .dot {
      display: flex;
      justify-content: center;
      opacity: 0.5;
    }

    .active {
      opacity: 1;
      transition: opacity 0.6s ease;
    }
  }

  .modal {
    position: fixed;
    z-index: 4;
    padding-top: 100px;
    padding-left: 100px;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
  }

  /* Modal Content (image) */
  .modal-image {
    display: inline-block;
    width: 100%;
    height:100vh;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }
`;
