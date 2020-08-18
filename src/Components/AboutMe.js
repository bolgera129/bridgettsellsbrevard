import React from "react"
import Image from "react-bootstrap/Image"
import css from "./AboutMe.module.css"
import NavBar from "./NavBar";
import HomeCardGroup from "./HomeCardGroup"
import Contact from "../Contact";
import { Grid } from "@material-ui/core";

export default function AboutMe(){

    return(
        <div className = {css.aboutmecont}>
        <div>
            <Grid container className = "marginTop30 justify-content-center paddingBot100">
                <Grid lg = {4} sm ={12} md = {3} >
                <Image src = "./assets/headshot.jpg" className = {css.headshot} rounded/>
                </Grid>
                <Grid container item lg = {8} sm ={12} md = {9} className = "marginTop30 justify-content-center">
                    <div className = "width80">
                        <p style = {{fontSize: "30px", paddingTop:"15%"}}>
                           Meet Bridgett Stuhlmiller!  A real estate agent with a love for life, the Space Coast, and making her clients her number one priority!
                        </p>                        
                    </div>

                </Grid >   
            </Grid>
            {/* <div className = {css.cardcontainer}>
                <h2>
                    Testimonials
                </h2>
                <HomeCardGroup/>
            </div> */}
        </div>    
        <div id = "contact" className = "marginTop60 paddingBot75 paddingTop75">
            <h3>
                Contact Me
            </h3>
           <Contact/>
        </div>        
        </div>

    )
}