import React from "react"
import data from "../Utils/cities"
import { Grid,Divider, Container } from "@material-ui/core";
import Image from "react-bootstrap/Image"


export default function City(props){

    const cities = data.cities;

    return(
        <div>
            {cities.map(c => 

            )}      
         </div>          
    )
}