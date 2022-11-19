import { Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Slider } from '@material-ui/core';
import { FilterListOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { Container, Title, TitleFilter } from './styles';



function SideBar() {

    const categorias =["blusas", "calças", "shorts", "vestidos", "blazers", "saias", "sport"]
    const marcas =["Blue Sky", "Vita", "Ferreira", "ZZ", "John Estiano",]
    const [value, setValue] =  useState([100, 500]);
    const rangeSelector = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };
  
    return (
<>
<Container>

<TitleFilter><FilterListOutlined/> Filtros</TitleFilter>

<FormControl>

            <Title>Categorias</Title>
      <Divider variant="middle" />

            {categorias.map(item => (
              <FormControlLabel
                label={item}
                control={(
                  <Checkbox
                    value={item}
                    // onChange={handleRoleChange}
                    color="primary"
                  />
                )}
              />
            ))}

    <Title>Filtro de Preço</Title>
    <Divider variant="middle"/>
    <Slider
        value={value}
        onChange={rangeSelector}
        max={500}
        color="primary"
      />
      Entre {value[0]} e {value[1]} 

    <Title>Marcas</Title>
    <Divider variant="middle" />
            {marcas.map(item => (
              <FormControlLabel
                label={item}
                control={(
                  <Checkbox
                    value={item}
                    // onChange={handleRoleChange}
                    color="primary"
                  />
                )}
              />
            ))}
            
    </FormControl>
</Container>
</>
  )} 
  
export default SideBar;