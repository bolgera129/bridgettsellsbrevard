import React, { useState } from "react"
import NavBar from "./NavBar"
import css from "./Home.module.css"
import AboutMe from "./AboutMe"
import useWindowDimensions from "../Utils/windowDimensions"
import "./Billy_Ohio.ttf"
import {Button} from "antd"
// import CrossfadeImage from 'react-crossfade-image'
import LazyLoad from 'react-lazyload';
import {Image} from "react-bootstrap"

import 'antd/dist/antd.css';



export default function Home(props){
    console.log('home')

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
    const largeImages = ["/assets/lg2.jpg", "/assets/lg1.jpg", "/assets/lg3.jpg", "/assets/lg4.jpg", '/assets/lg5.jpg']
    const smallImages = ["/assets/sm1.jpg", "/assets/sm2.jpg", "/assets/sm3.jpg","/assets/sm4.jpg", "/assets/sm5.jpg"]

    var images;
    if (width < 786){
        images = smallImages
    }
    else{
        images = largeImages
    }


    if (width < 786){
        setTimeout(function(){ changeIndex(index) }, 3500);
    }
    else{
        setTimeout(function(){ changeIndex(index) }, 3500);
    }
    

    return(
        <div className = {css.mainCont}>
            <NavBar bg = "false"/>  
        <div>
        <img width = {width} height = {height} className = {css.screen} alt = ''/>
            <LazyLoad height = {height} width = {width} once>
                <Image src = {images[index]}   alt = "homepage" height = {height} width = {width}/>
            </LazyLoad>
           <div className = {css.overlay} >
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
           </div>
        </div>
                    
            <AboutMe/>
        </div>
    )
}