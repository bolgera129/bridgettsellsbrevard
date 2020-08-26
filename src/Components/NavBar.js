import React,{useEffect,useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import publicUrl from "Utils/publicUrl"
import css from "../Components/NavBar.module.css"


export default function NavBar(props){

  var bgcolor = false;
  if (props.bg === "true"){
    bgcolor = false;
  }
  else{
    bgcolor = true;
  }
  
    const [scroll, setScroll] = useState(1)


    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY < 50
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      })
    })
    
    return(
      <div>

        <Navbar bg={ (scroll && bgcolor) ? "transparent" : "light"} fixed = "top" className = {css.navCont} collapseOnSelect expand="lg">
          <Navbar.Brand href="/">   <Image src={publicUrl((scroll && bgcolor) ? "/assets/coastal_life.jpg" : "/assets/coastal_life_color.jpg")} className = {css.logo}/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className = { css.toggler }/> 
          <Navbar.Collapse id = "basic-navbar-nav" className = {css.navbarContainer}>
            <Nav className = {css.navbarNav}>
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link  href="/"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> Home </strong></Nav.Link>
              </Nav.Item>    
              </div>    
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link  href="/search"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> Search Homes</strong></Nav.Link>
              </Nav.Item>    
              </div>
              {/* <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link  href="/resources"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> About Brevard </strong></Nav.Link>
              </Nav.Item>    
              </div>         */}
              {/* <div className = {scroll ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link href = "/home#about"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}>About Me</strong></Nav.Link>
              </Nav.Item>        
              </div> */}
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link href = "/home#contact"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}>Contact Me</strong></Nav.Link>
              </Nav.Item>        
              </div>
            </Nav>
          </Navbar.Collapse>  
        </Navbar>
      </div>
    )

}