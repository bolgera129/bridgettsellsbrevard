import React from "react"
import Card from "react-bootstrap/Card"
import { Grid } from "@material-ui/core"



export default function HomeCardGroup(props){
    return(
            <Grid container spacing = {0}>
                <Grid container item lg = {4} sm = {12} md = {4} className = "justify-content-center">
                    <Card className = "width80" >
                    <Card.Img variant="top" src="./assets/soldimage1.jpg" />
                    <Card.Body>
                        <Card.Title>Titusville, FL</Card.Title>
                        <Card.Text>
                            "Having Sami help me and work on my behalf, I was able to relax and focus on looking for our new home in another state. I would recommend Sami to anyone buying or selling Real Estate."
                        </Card.Text>
                    </Card.Body>
                    </Card>                    
                </Grid>
                <Grid container item lg = {4} sm = {12} md = {4} className = "justify-content-center">
                    <Card className = "width80">
                    <Card.Img variant="top" src="./assets/soldimage2.jpg" />
                    <Card.Body>
                        <Card.Title>Cocoa Beach, FL</Card.Title>
                        <Card.Text>
                        "Sami is thoughtful; she listens to you and can meet your needs when looking for a home".
                        </Card.Text>
                    </Card.Body>
                    </Card>                    
                </Grid>
                <Grid container item lg = {4} sm = {12} md = {4} className = "justify-content-center">
                    <Card className = "width80">
                    <Card.Img variant="top" src="./assets/soldimage3.jpg" />
                    <Card.Body>
                        <Card.Title>Cocoa Beach, FL</Card.Title>
                        <Card.Text>
                            "Sami helped me find the perfect home for my elderly father.  I wanted to move him closer to me, and her ability to think through what he may need in the future and her expertise in this area helped me find the perfect place for him."
                        </Card.Text>
                    </Card.Body>
                    </Card>                    
                </Grid>
                </Grid>
    )}