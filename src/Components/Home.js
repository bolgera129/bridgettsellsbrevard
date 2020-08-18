import React, { useState } from "react"
import publicUrl from "./../Utils/publicUrl"
import NavBar from "./NavBar"
import css from "./Home.module.css"
import Card from "react-bootstrap/Card"
import SearchForm from "./SearchForm"
import AboutMe from "./AboutMe"
import Contact from "Contact"
import Typewriter from 'typewriter-effect';
import useWindowDimensions from "../Utils/windowDimensions"
import "./Billy_Ohio.ttf"
import CrossfadeImage from "react-crossfade-image"
import {Button} from "antd"

import 'antd/dist/antd.css';



export default function Home(props){

    const { height, width } = useWindowDimensions();

    const [Img, setImg] = useState();
    const [index, setIndex] = useState(0);

    function changeIndex(index){
        if (index == 3){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }

    const largeImages = ["/assets/lg2.jpg", "/assets/lg1.jpg", "/assets/lg3.jpg", "/assets/lg4.jpg"]
    const smallImages = ["/assets/sm1.jpg", "/assets/sm2.jpg", "/assets/sm3.jpg","/assets/sm4.jpg", "/assets/sm5.jpg"]


    const words = ["Buyers","Sellers","Your Community","Your New Home"];
    const large = '/assets/beach.jpg';
    const small = '/assets/smhomepage2.jpg';

    if (width < 786){
        Img = small
        setTimeout(function(){ setImg(smallImages[index]); changeIndex(index) }, 3000);
    }
    else{
        setTimeout(function(){ setImg(largeImages[index]); changeIndex(index) }, 3000);
    }

    return(
        <div className = {css.mainCont}>
            <Card id = "#container">
                <Card.Img src={Img} height = {height} width = {width} fluid/>
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