import React from "react";
import {
    Center,
    ContactItem,
    Container,
    Desc,
    Left,
    List,
    ListItem,
    Logo,
    Payment,
    Right,
    SocialContainer,
    SocialIcon,
    Title
} from "./styles";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter
} from "@material-ui/icons";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Úteis</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Minhas Compras</ListItem>
                    <ListItem>Produtos Masculinos</ListItem>
                    <ListItem>Produtos Femininos</ListItem>
                    <ListItem>Accessórios</ListItem>
                    <ListItem>Minha Conta</ListItem>
                    <ListItem>Acompanhar Pedido</ListItem>
                    <ListItem>Produtos Favoritos</ListItem>
                    <ListItem>Termos</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Nos Encontre</Title>
                <ContactItem>
                    <Room
                        style={{
                        marginRight: "10px"
                    }}/>
                    622, Rua das Laranjeiras, Potengi - Natal/RN
                </ContactItem>
                <ContactItem>
                    <Phone
                        style={{
                        marginRight: "10px"
                    }}/>
                    +55 084 3221-2785
                </ContactItem>
                <ContactItem>
                    <MailOutline
                        style={{
                        marginRight: "10px"
                    }}/>
                    contactus@email.com.br
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
};

export default Footer;