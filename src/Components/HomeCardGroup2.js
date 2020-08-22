import React from "react"
import Media from 'react-bootstrap/Media'
import Image from 'react-bootstrap/Image'
import css from "./HomeCardGroup2.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function HomeCardGroup(props){
    return(
        <div>
            <Row fluid>
                <Col md = {6}>
                    <Image
                    width={600}
                    height={500}
                    className="mr-6"
                    src="./assets/soldimage1.jpg"
                    alt="Generic placeholder"
                    rounded
                    />
                </Col>
                <Col md = {6}>
                    <h1>
                        Sami is the best!
                    </h1>                   
                </Col> 
            </Row>
            <Media>
                <Image
                width={64}
                height={64}
                className="mr-6"
                src="./assets/soldimage2.jpg"
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>Media Heading</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media> 
            <Media>
                <Image
                width={64}
                height={64}
                className="mr-6"
                src="./assets/soldimage3.jpg"
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>Media Heading</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                </p>
                </Media.Body>
            </Media> 
        </div>

    )}