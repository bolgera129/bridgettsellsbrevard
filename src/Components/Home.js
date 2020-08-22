import React, { useState } from "react"
import NavBar from "./NavBar"
import css from "./Home.module.css"
import Card from "react-bootstrap/Card"
import AboutMe from "./AboutMe"
import useWindowDimensions from "../Utils/windowDimensions"
import "./Billy_Ohio.ttf"
import {Button} from "antd"

import 'antd/dist/antd.css';



export default function Home(props){

    const { height, width } = useWindowDimensions();

    const [index, setIndex] = useState(0);

    function changeIndex(index){
        if (index === 4){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }
    const largeImages = ["/assets/lg2.jpg", "/assets/lg1.jpg", "/assets/lg3.jpg", "/assets/lg4.jpg"]
    const smallImages = ["/assets/sm1.jpg", "/assets/sm2.jpg", "/assets/sm3.jpg","/assets/sm4.jpg", "/assets/sm5.jpg"]

    var images;
    if (width < 786){
        images = smallImages
    }
    else{
        images = largeImages
    }


    if (width < 786){
        setTimeout(function(){ changeIndex(index) }, 3000);
    }
    else{
        setTimeout(function(){ changeIndex(index) }, 3000);
    }
    

    return(
        <div className = {css.mainCont}>
            <Card id = "#container">
                <Card.Img src={images[index]} height = {height} width = {width} fluid/>
                <Card.ImgOverlay className = {css.headerImg}>
                    <NavBar bg = "false"/>  
                        <div className = {css.overlayTitle}>
                            Love Where You Live
                            {/* <Typewriter
                                options={{
                                    strings: ["Merritt Island","Cocoa Beach","Melbourne","Viera", "Rockledge", "Cocoa", "Titusville", "Indialantic"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /> */}
                        </div>
                        <Button shape="circle" className = {css.bubble} ghost href = "/assets/buyerbook.pdf">
                            Buyers
                        </Button>
                        <Button shape="circle" className = {css.bubbleR} ghost href = "/assets/sellerbook.pdf">
                            Sellers
                        </Button>
                </Card.ImgOverlay>
            </Card>
            <AboutMe/>
        </div>
    )
}