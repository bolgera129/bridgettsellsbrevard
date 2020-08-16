import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Card from "react-bootstrap/Card"
import css from "./SearchOutput.module.css"
import Container from "react-bootstrap/Container"
import {Dialog, DialogContent,DialogTitle, DialogContentText, DialogActions} from "@material-ui/core"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"



export default function SearchOutput(props){

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      const properties = props.properties;
      console.log(properties)
      
    return(
        <Container id ={css.outputCont}>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" Want more information?"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                I would be happy to provide you with more information and pictures! Just click go, fill out the form and I will get back to you.
            </DialogContentText>
        </DialogContent>
        <DialogActions className = "justify-content-center">
        <Link to = "/#contact">

        <Button onClick={handleClose} color="primary" autoFocus className = "margin5">
            Go
        </Button>
        </Link>
        <Button onClick={handleClose} color="primary" autoFocus className = "margin5">
            Cancel
        </Button>
        </DialogActions>
      </Dialog>
        <Grid container spacing = {3}>

    {properties.map(p =>
            <Grid lg = {4} xs = {12} md = {12} onClick = {open}>
                    <a onClick = {handleClickOpen}>

                <div className = "margin10">
                    <Card className = {css.card}>
                        <Card.Img variant="top" src={p.thumbnail} className = "cardImg" />
                        <Card.Body>
                        <Card.Title>{formatter.format(p.price)}</Card.Title>
                        <Card.Text>                        
                            {p.address.line + " " +  p.address.city + " " + p.address.postal_code}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Square Footage : {p.building_size.size}, </small>
                        <small className="text-muted">Bedrooms : {p.beds}, </small>
                        <small className="text-muted">Baths : {p.baths} </small>
                        </Card.Footer>
                    </Card>                  
                </div>           
                </a>       
                    
            </Grid>     
        )}
    </Grid>

        </Container>



    )
}