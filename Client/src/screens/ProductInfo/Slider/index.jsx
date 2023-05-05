import React, { useContext, useEffect, useState } from "react";
import { SliderWrapper, Wrapper } from "./styles";
import { ArrowLeftOutlined, ArrowRightRounded } from "@material-ui/icons";
import { GlobalContext } from "../../../context/GlobalState";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Slider = () => {
  
  const { id} = useParams();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrenIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const pageSize = 5;
  const startIndex = Math.floor(currentIndex / pageSize) * pageSize;

  const getPhotos = () => {
    axios
      .get(`http://localhost:3003/product/getAllImagesByProduct/${id}`)
      .then(function (response) {
        setImages(response.data.Result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleNext = () => {
    setCurrenIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrenIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleSelectImage = (index) => {
    setCurrenIndex(startIndex + index);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const imageSelect = images[currentIndex];

  return (
    <Wrapper>
      <SliderWrapper>
        <div className="image">
          <img
            className="active"
            alt=""
            src={imageSelect?.photos}
            onClick={showModal}
          />
        </div>
        <div className="control">
          <button className="btn btn-prev" onClick={handlePrev}>
            <ArrowLeftOutlined />
          </button>
          <button className="btn btn-next" onClick={handleNext}>
            <ArrowRightRounded />
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
        {images
          .slice(startIndex, startIndex + pageSize)
          .map((item, index) => (
            <img
              key={item.id}
              src={item.photos}
              alt=""
              className={`dot ${startIndex + index === currentIndex ? "active" : ""}`}
              onClick={() => handleSelectImage(index)}
              style={{ width: `${100 / pageSize}%` }}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default Slider;
