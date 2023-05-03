import React from "react";
import {
    Buttons,
    Container,
    H1,
    H1Mobile,
    Img,
    ImgButton
} from "./styles";
import img from "../../assets/marcas/app.png";
import apple from "../../assets/apple.png";
import google from "../../assets/gogle.png";

const AppCard = () => {
    return (
        <Container>
            <div>
                <H1>BAIXE O APP
                    <br></br>& GANHE CUPOM!</H1>
                <H1Mobile>PARA ACESSAR EM UMA MELHOR EXPERIÊNCIA<br></br>BAIXE NOSSO APP<br></br>& GANHE CUPOM!</H1Mobile>
                <p>Ganhe 30% de desconto na sua primeira compra usando o APP Lama.</p>
                <small>Promoção limitada á R$ 300,00.</small>
                <Buttons>
                    <ImgButton src={apple}/>
                    <ImgButton src={google}/>
                </Buttons>
            </div>
            <div>
                <Img src={img}/>
            </div>
        </Container>
    );
};

export default AppCard;