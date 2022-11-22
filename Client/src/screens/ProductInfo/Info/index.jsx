import { Button, FormLabel } from '@material-ui/core';
import { Label, LocalShippingOutlined, ShoppingCartOutlined, StraightenOutlined } from '@material-ui/icons';
import React from 'react'
import { A, ButtonTam, Container, Description, Frete, NameProduct, Offer, OldPrice, Percentual, Price, SixX, Tam, TamTitle } from './styles';

function Info() {

    return (
<Container>
    <NameProduct>
     Macacão cami Ponto suíço Amarração frontal Bainha em camadas
    </NameProduct>
    <Offer>
        Oferta de Natal
    </Offer>
    <Price>
    R$74,99
    <OldPrice>
        <s>R$83,90</s>
    </OldPrice>
    <Percentual>-11%</Percentual>
    </Price>
    <SixX>6x de R$12,50 sem juros</SixX>

    <TamTitle>Tamanhos</TamTitle>
    <Tam>
        <ButtonTam>PP</ButtonTam>
        <ButtonTam>P</ButtonTam>
        <ButtonTam>M</ButtonTam>
        <ButtonTam>G</ButtonTam>
        <ButtonTam>XG</ButtonTam>
        <ButtonTam>XGG</ButtonTam>
        <ButtonTam>T. ÚNICO</ButtonTam>
    </Tam>
    <A> <StraightenOutlined style={{marginRight:"7px"}}/>Guia de tamanhos</A>
    <Frete>
    <LocalShippingOutlined style={{margin:"7px"}}/>  Frete grátis em pedidos acima de R$120,00
    </Frete>
    <TamTitle>Descrição</TamTitle>
    <Description>
    Cor: Rosa empoeirado
    Estilo:	Boho
    Estampa: Simples
    Detalhes: Costas nuas / sem costas, Franja, Nó, Em camadas, Zíper
    Tipo: Suspensório
    Tipo de gola: Alcinha
    Comprimento da Manga: Sem Mangas
    Linha da cintura:Cintura Alta
    Comprimento:Curto
    Tipo de Ajuste:	Ajuste Regular
    Tecido:	Não elástico
    Material: Tecido
    Composição:	100% Poliéster
    Instruções de manutenção:Lavagem de máquina ou lavagem profissional a seco
    Translúcido: Não
    </Description>
    <Button variant="contained" color="primary" size="large">
    Adicionar ao Carrinho <ShoppingCartOutlined style={{marginLeft:"10px"}}/>
    </Button>   
  
</Container>
  )} 
  
export default Info;