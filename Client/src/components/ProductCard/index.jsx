import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { Add, Favorite, Share } from '@material-ui/icons';
import React from 'react'

function ProductCard() {

    return (
<>
<Card style={{width:"280px", height:"550px", margin:"30px"}}>
      <CardMedia
        component="img"
        height="420"
        image="https://img.ltwebstatic.com/images3_pi/2022/07/19/16582125646135fc40663dff127a1ed84a8613feb4_thumbnail_600x.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
        Vestido V Vita
        </Typography>
      </CardContent>

      <CardActions style={{marginBottom:"10px", display:"flex", justifyContent:"space-between"}}>
        <div>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
        </div>
        <IconButton aria-label="details" style={{background:"#e61919", borderRadius:"8px"}}>
          <Typography variant="body1" color="secondary">
          Detalhes
        </Typography>
        </IconButton>
        </CardActions>
    </Card>
</>
  )} 
  
export default ProductCard;