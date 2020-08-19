import React, { useState} from "react"
import Container from "react-bootstrap/Container"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "react-bootstrap/Button"
import CircularProgress from "@material-ui/core/CircularProgress"


export default function Contact(props){

    const [email,setEmail] = useState()
    const [name, setName] = useState()
    const [submitting, setSubmitting] = useState()
    const [message, setMessage] = useState()

    const text = {"email" : email, "name" : name, "message" : message}

    function addEmail(props){
      setSubmitting(true)
          fetch('/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text : text})
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
                }
             else {
            }
          });
          React.useRef.current = setTimeout(() => {
            setSubmitting(false)
          }, 2000);
      }

    return(
        <Container title = "Contact Me!" id = "contact">
            <div>
                You can reach out to me or enter your email address and I will get back to you!
            </div>
            <Grid container spacing = {3} className = "justify-content-center">
                <Grid container item lg = {12} className ="justify-content-center">
                  <div>
                    <h6 className = "padding5">
                      Email: bridgettsellsbrevard@gmail.com
                    </h6>                    
                  </div>
                  <div>
                    <h6 className = "padding5">
                      Phone: 757-817-1138
                    </h6>                    
                  </div>
                </Grid>
                <Grid container item lg = {6}>
                    <TextField
                    variant = "outlined"
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={n=> setEmail(n.target.value)}
                    />
                </Grid>
                <Grid container item lg = {6}>
                    <TextField
                    variant = "outlined"
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    onChange={n=> setName(n.target.value)}
                    />
                </Grid>      
                <Grid container item lg = {12}>
                    <TextField
                    multiline
                    rows = {6}
                    variant = "outlined"
                    margin="dense"
                    id="message"
                    label="Message"
                    fullWidth
                    onChange={m => setMessage(m.target.value)}
                    />
                </Grid>                         
            </Grid>
            {submitting ? 
                <CircularProgress/>
                :           
                <Button onClick = {addEmail} variant = "outline-dark" className="margin10">
                    Submit
                </Button>}   
        </Container>
    )
}
