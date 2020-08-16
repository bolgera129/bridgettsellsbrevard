import React, {useState} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"


function Map(props) {

  const [open, setOpen] = useState(false);
  const [modalProperty, setModalProperty] = useState();

  var properties
  if(props) {
    properties = props.properties;
    properties.map(p => console.log(p.address.lat +" "+ p.address.lon))

  }
  else{
    properties = false
  }
  console.log(properties)
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 28.2639, lng: -80.7214 } }
        defaultZoom = { 8 }
      >
        {properties  ?  properties.map(p =>
           <Marker position={{ lat: p.address.lat, lng: p.address.lon }} onClick = {e => {setOpen(true); setModalProperty(p)}}/>) : ""}
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          isMarked = {true}
        />
        {modalProperty ? 
           <Modal show={open} onHide={e => setModalProperty(false)}>
        <Modal.Header>
          <Modal.Title>
            <Image src = {modalProperty.thumbnail} fluid/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalProperty.address.line + " " +  modalProperty.address.city + " " + modalProperty.address.postal_code}
          <div>
            <small className="text-muted">Square Footage : {modalProperty.building_size.size}, </small>
            <small className="text-muted">Bedrooms : {modalProperty.beds}, </small>
            <small className="text-muted">Baths : {modalProperty.baths} </small>            
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e => setOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        : ""}
      </div>
   );
}
export default Map;
