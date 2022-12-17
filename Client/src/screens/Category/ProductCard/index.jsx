import React, { useContext } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import {  Favorite, Share } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalState';

const ProductCard = ({product, productId}) => {
  
  
  const {productSelect, setProductSelect} = useContext(GlobalContext)
  console.log("product", product)

    return (
    <>
    <Card 
    style={{width:"280px", 
    height:"550px",
    margin:"30px"}}
    onClick={setProductSelect(product.id)}
    >
    <Link to='/product'>
          <CardMedia
          component="img"
          height="420"
          image={product.folder}
        />
    </Link>
      <CardContent>
        <Typography variant="body1" color="text.primary">
        {product.name}
        </Typography>
      </CardContent>

      <CardActions style={{marginBottom:"30px", display:"flex", justifyContent:"space-between"}}>
        <div>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
        </div>
     

        <Button variant="contained" color="primary" style={{marginBottom:"20px"}}>
        {product.price}
        </Button>   
   
        </CardActions>
      </Card>
</>
  )} 
  
export default ProductCard;