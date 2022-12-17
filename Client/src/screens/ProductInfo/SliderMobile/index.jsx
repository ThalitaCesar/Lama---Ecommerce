import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import { Zoom, Navigation } from "swiper";
import axios from "axios";
import { GlobalContext } from "../../../context/GlobalState";

export default function SliderMobile() {
const {productSelect} = useContext(GlobalContext)
const [photos, setPhotos] = useState([])
console.log("productSelect", productSelect)

const getPhotos =()=>{
  axios.get(`http://localhost:3003/product/getAllImagesByProduct/${productSelect}`)
  .then(function (response) {
    setPhotos(response.data.Result)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

    useEffect(()=>{
      getPhotos()
    },[])
    console.log("photosmobile", photos)

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
  {photos.map((photo)=>(
         <SwiperSlide className="swiper-slide" key={photo.id}>
         <div className="swiper-zoom-container">
           <img src={photo.photos} />
         </div>
       </SwiperSlide>
  ))}
  </Swiper>
    
    </Container>
  );
}
