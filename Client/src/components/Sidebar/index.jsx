import { Button, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, IconButton, Slider } from '@material-ui/core';
import { FilterListOutlined } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Container, Title, TitleFilter } from './styles';



function SideBar() {

  const {categorySelect, setCategorySelect } = useContext(GlobalContext)
 

    const categorias =["blusas", "calças", "shorts", "vestidos", "blazers", "saias", "sport"]
    const marcas =["Blue Sky", "Vita", "Ferreira", "ZZ", "John Estiano",]
    const categoriasM =["bermudas", "calças", "camisetas", "polo", "jeans", "sport"]
    const categoriasAB =["brincos", "colar", "pulseira", "bolsas", "anéis", "mochila", "lenços", "carteiras", "relógio"]
    const categoriasC =["sapatos Fem", "sapatos masc", "tênis fem", "tênis masc", "sandálias fem", "sandálias masc"]
     
    const [value, setValue] =  useState([100, 500]);
    const rangeSelector = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };
  
    return (
<>
<Container>
<br></br>
<TitleFilter><FilterListOutlined/> Filtros</TitleFilter>

{categorySelect == 'feminino' && (
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


<br></br>
<Button variant="contained" color="primary">
  Filtrar</Button>

</FormControl>
)}


{categorySelect == 'masculino' && (
  <FormControl>

<Title>Categorias</Title>
<Divider variant="middle" />

{categoriasM.map(item => (
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

<br></br>
<Button variant="contained" color="primary">
  Filtrar
  </Button>
</FormControl>
)}


{categorySelect == 'bolsas e acessórios' && (
  <FormControl>

<Title>Categorias</Title>
<Divider variant="middle" />

{categoriasAB.map(item => (
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

<br></br>
<Button variant="contained" color="primary">
  Filtrar
  </Button>
</FormControl>
)}


{categorySelect == 'calçados' && (
  <FormControl>

<Title>Categorias</Title>
<Divider variant="middle" />

{categoriasC.map(item => (
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

<br></br>
<Button variant="contained" color="primary">
  Filtrar
  </Button>
</FormControl>
)}

</Container>
</>
  )} 
  
export default SideBar;