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


export default function Home(props){

    const { height, width } = useWindowDimensions();

    const [Img, setImg] = useState();
    const [index, setIndex] = useState(0);

    function changeIndex(index){
        if (index == 6){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }

    const largeImages = ["/assets/beach.png", "/assets/cb2.png", "/assets/cb3.png", "/assets/cv1.png", "/assets/kscVisitor.png", "/assets/mims.png", "/assets/viera.png"]
    const smallImages = ["/assets/beach.png", "/assets/cb2.png", "/assets/surfer-surfboard-surfing-wave-royalty-free-thumbnail.jpg"]


    const words = ["Buyers","Sellers","Your Community","Your New Home"];
    const large = '/assets/beach.jpg';
    const small = '/assets/smhomepage2.jpg';

    if (width < 786){
        Img = small
        setTimeout(function(){ setImg(smallImages[index]); changeIndex(index) }, 4000);
    }
    else{
        setTimeout(function(){ setImg(largeImages[index]); changeIndex(index) }, 4000);
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
                </Card.ImgOverlay>
            </Card>
            <AboutMe/>
        </div>
    )
}