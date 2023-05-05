import React, {useContext, useEffect, useState} from "react";
import {Container} from "./styles";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import {Zoom, Navigation} from "swiper";
import axios from "axios";
import {GlobalContext} from "../../../context/GlobalState";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function SliderMobile() {
    
    const { id} = useParams();
    const [photos,
        setPhotos] = useState([])

    const getPhotos = () => {
        axios
            .get(`http://localhost:3003/product/getAllImagesByProduct/${id}`)
            .then(function (response) {
                setPhotos(response.data.Result)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <Container className="swiper-container">

            <Swiper
                style={{
                "--swiper-navigation-color": "var(--red)",
                "--swiper-pagination-color": "#fff"
            }}
                navigation={true}
                zoom={true}
                modules={[Zoom, Navigation]}
                className="mySwiper">
                {photos.map((photo) => (
                    <SwiperSlide className="swiper-slide" key={photo.id}>
                        <div className="swiper-zoom-container">
                            <img src={photo.photos}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Container>
    );
}
