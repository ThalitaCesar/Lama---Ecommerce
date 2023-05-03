import {Grid} from "@material-ui/core";
import React from "react";
import {ContainerFlex, ImgMarks} from "./styles";
import mark1 from "../../assets/marcas/Group 69.png";
import mark2 from "../../assets/marcas/Rectangle 38.png"
import mark3 from "../../assets/marcas/Rectangle 41.png"
import mark4 from "../../assets/marcas/Rectangle 43.png"
import mark5 from "../../assets/marcas/Rectangle 44.png"
import mark6 from "../../assets/marcas/Rectangle 45.png"

const Marks = () => {
    return (
        <ContainerFlex>
            <Grid container>
                <Grid item>
                    <ImgMarks src={mark1}/>
                </Grid>
                <Grid item>
                    <ImgMarks src={mark2}/>
                </Grid>
                <Grid item>
                    <ImgMarks src={mark3}/>
                </Grid>
                <Grid item>
                    <ImgMarks src={mark4}/>
                </Grid>
                <Grid item>
                    <ImgMarks src={mark5}/>
                </Grid>
                <Grid item>
                    <ImgMarks src={mark6}/>
                </Grid>
            </Grid>
        </ContainerFlex>
    );
};

export default Marks;