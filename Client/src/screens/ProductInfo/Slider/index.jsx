import React, {useContext, useEffect, useState } from "react";
import { SliderWrapper, Wrapper } from "./styles";
import { ArrowLeftOutlined, ArrowLeftRounded, ArrowRightAltRounded, ArrowRightRounded } from "@material-ui/icons";
import { GlobalContext } from "../../../context/GlobalState";
import axios from "axios";

const Slider = () => {
  const {productSelect} = useContext(GlobalContext)
const [images, setImages] = useState([])
console.log("productSelect", productSelect)

const getPhotos =()=>{
  axios.get(`http://localhost:3003/product/getAllImagesByProduct/${productSelect}`)
  .then(function (response) {
    setImages(response.data.Result)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

    useEffect(()=>{
      getPhotos()
    },[])

    console.log("photosmobile", images)
  console.log("=====", images);
  const [currentIndex, setCurrenIndex] = useState(0);
  const [active, setActive] = useState("active");
  const [startSlider, setStartSlider] = useState(0);
  const [endSlider, setEndSlider] = useState(5);
  const listSlider = images.slice(startSlider, endSlider);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    console.log("aaa");
    const length = images.length;
    if (currentIndex + 1 === length) {
      setCurrenIndex(0);
    } else if (currentIndex === endSlider - 1) {
      setStartSlider(startSlider + 5);
      setEndSlider(endSlider + 5);
      setCurrenIndex(currentIndex + 1);
      setActive("active");
      setTimeout(() => {
        setActive("");
      }, 500);
    } else {
      setCurrenIndex(currentIndex + 1);
      setActive("active");
      setTimeout(() => {
        setActive("");
      }, 500);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrenIndex(images.length - 1);
    } else if (currentIndex === startSlider) {
      setStartSlider(startSlider - 5);
      setEndSlider(endSlider - 5);
      setCurrenIndex(currentIndex - 1);
      setActive("active");
      setTimeout(() => {
        setActive("");
      }, 500);
    } else {
      setCurrenIndex(currentIndex - 1);
      setActive("active");
      setTimeout(() => {
        setActive("");
      }, 500);
    }
  };

  const handleSelectImage = (index) => {
    setCurrenIndex(index);
    setActive("active");
    setTimeout(() => {
      setActive("");
    }, 500);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const imageSelect = images[currentIndex];
  console.log("currentIndex ===", currentIndex);
  console.log("image select ====", imageSelect);
  return (
    <Wrapper>
      <SliderWrapper>
        <div className="image">
          <img
            className={active}
            alt=""
            src={imageSelect?.photos}
            onClick={showModal}
          />
        </div>
        <div className="control">
          <button
            className={`btn btn-prev ${currentIndex === 0 ? "disable" : ""}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ArrowLeftOutlined />
          </button>
          <button
            className={`btn btn-next ${
              currentIndex === images.length - 1 ? "disable" : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
          >
            <ArrowRightRounded/>
          </button>
        </div>
        {isOpen && (
          <div className="modal">
            <span className="close" onClick={() => setIsOpen(false)}>
              X
            </span>
            <img src={imageSelect?.photos} alt="Full Size" />
          </div>
        )}
      </SliderWrapper>
      <div className="list-dot">
        {listSlider.map((item, index) => (
          <img
            key={item.id}
            src={item.photos}
            alt=""
            className={`dot ${item.id === currentIndex + 1 ? "active" : ""}`}
            onClick={() => handleSelectImage(item.id - 1)}
            style={{ width: `${(1 / listSlider.length) * 100}%` }}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Slider;
