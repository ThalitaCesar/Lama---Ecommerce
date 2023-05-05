import React, { useContext } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import {  Favorite, Share } from '@material-ui/icons';
import {  useHistory } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalState';

const ProductCard = ({product}) => {
  const { setProductSelect } = useContext(GlobalContext);
  const history = useHistory();
 

  const handleClick = () => {
    setProductSelect(product.id);
    history.push(`/product/${product.id}`)
    };

  return (
    <>
      <Card 
        style={{
          width: "280px", 
          height: "550px",
          margin: "30px"
        }}
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          height="410"
          image={product.folder}
          style={{cursor: 'pointer'}}
        />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {product.name}
          </Typography>
        </CardContent>

        <CardActions 
          style={{
            marginBottom: "30px", 
            display: "flex", 
            justifyContent: "space-between"
          }}
        >
          <div>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>

            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </div>

          <Button 
            variant="contained" 
            color="primary" 
            style={{marginBottom:"20px"}}
          >
            {product.price}
          </Button>   
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
