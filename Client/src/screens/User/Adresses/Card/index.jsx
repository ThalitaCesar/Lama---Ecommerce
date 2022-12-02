
import { Edit } from '@material-ui/icons';
import React from 'react'
import { FlexContent, FlexItem, IconContent, Text, TextTitle } from './styles';


function Card() {

    return (
<>
<FlexItem>
      <IconContent>
      <Edit size={60} style={{marginBottom:"10px"}}/>
      <small>Editar</small>
      </IconContent>
      <FlexContent>
          <TextTitle>
            <strong>Rua Treze de Maio, 5842,</strong>
          </TextTitle>
          <Text>
            <p>Alecrim, Natal-RN</p>
            <p>CEP: 59000-000</p>
          </Text>
      </FlexContent>
  </FlexItem>

</>
  )} 
  
export default Card;