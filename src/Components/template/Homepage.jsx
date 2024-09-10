import React from 'react';
import styles from "../../styles/HomePage.module.css"
import {Container, Grid} from "@mui/material";
import Data from "../../../data/Data.js";
import ItemCards from "../module/ItemCards.jsx";
import {Link} from "react-router-dom";



function Homepage(props) {


    return (
        <Container maxWidth="lg">
            <div className={styles.Main}>
                <h2>Select the subtitle format</h2>
                <Grid container>
                    {Data.map((i) => <Grid key={i.id} item xl={12} lg={12} xs={12}>

                        <ItemCards name={i.name} sale={i.sale} saleFree={i.saleFree} img={i.img}/>

                    </Grid>)}
                </Grid>
                <div className={styles.Buttons}>
                    <button className={styles.Cancel}>Cancel</button>
                    <button className={styles.Actionbutton}><Link to="/Short">Download</Link></button>
                </div>
            </div>
        </Container>
    );
}

export default Homepage;