import {Divider, Grid} from "@material-ui/core";
import React from "react";
import {categories} from "../../data";
import CategoryItem from "../CategoryItem";
import {CategoriesDiv, CategoriesMobile, Container, Flex, Title} from "./styles";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Navigation} from "swiper";

const Categories = () => {

    return ( 
    <> 
    <CategoriesDiv>
        <Title>NAVEGUE POR CATEGORIAS</Title>
        <Container>

            <Grid container>

                {categories.map((item) => (
                    <Flex>
                        <Divider orientation="vertical" flexItem/>
                        <CategoryItem item={item} key={item.id}/>
                        <Divider orientation="vertical" flexItem/>
                    </Flex>
                ))}

            </Grid>
        </Container>
    </CategoriesDiv> < CategoriesMobile > <Title>NAVEGUE POR CATEGORIAS</Title> < Container > <Swiper
        style={{
        "--swiper-navigation-color": "#e61919",
        "--swiper-pagination-color": "#fff"
    }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {categories.map((item) => (
            <SwiperSlide className="swiper-slide">
                <CategoryItem item={item} key={item.id}/>
            </SwiperSlide>
        ))}

    </Swiper> 
    </Container>
      </CategoriesMobile > 
      </>
    );
};

export default Categories;