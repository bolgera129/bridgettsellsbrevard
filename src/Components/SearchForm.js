import React,{useState} from "react"
import Container from 'react-bootstrap/Container'
import css from "./SearchForm.module.css"
import Grid from "@material-ui/core/Grid"
import SearchOutput from "./SearchOutput";
import { List } from "@material-ui/core";
import NavBar from "./NavBar";
import Map from "./Map"
import {Select, Input, Dropdown, Checkbox, Divider, Button} from "antd"
import { DownOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';


export default function SearchForm(){


    const [city, setCity] = useState();
    const [properties,setProperties] = useState([])
    const [footage, setFootage] = useState([0,10000000]);
    const [type,setType] = useState([])
    const [bedrooms,setBedrooms] = useState()
    const [bath,setBaths] = useState()
    const [features, setFeatures]= useState([])
    const [clicked, setClicked] = useState(false)
    const [error, setError] = useState()
    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [visible, setVisible] = useState(false)
    const { Option } = Select;


    function fetchProperties(props){    

        setClicked(true)
        var max; 
        if (maxPrice === 1000000){
            max = "";
        }
        else{max = "&price_max=" + maxPrice}

        const forSaleUrl = "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relavance&city=" + city + "&limit=200&state_code=FL&sqft_min=" + footage[0] + "&baths_min=" + bath + "&beds_min=" + bedrooms + "&features=" + features + "&price_min=" + minPrice + max + "&prop_type=" + type + "&sqft_max=" + footage[1];
       
        fetch('https://www.bridgettsellsbrevard.com/.netlify/functions/search',{
            method : 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({url : forSaleUrl})
        })
        .then(r => r.json())
        .then(r => {
            console.log(r)
            if (r.properties.length > 0 ){setProperties(r.properties)}
            else{ setError("There are no properties with these features."); setClicked(false)}
        })
        .catch((error) => {setError("There was an error loading your future home."); setClicked(false)})
    }

    function handleFootageChange(props){
        var temp = footage
        temp[0] = props
        setFootage(temp)
    }

    function handleMaxFootageChange(props){
        var temp = footage
        temp[1] = props
        setFootage(temp)
    }
    function handleMenuClick(e){
        if (e.key === '2') {
          setVisible(false)
        }
      };

    function handleVisibleChange(flag){
        setVisible(flag)
      }
    const menu = (
<Grid container item fullWidth onClick={handleMenuClick}>
                                <Grid container item lg = {6}> 
                                <List component="nav">

                                <Grid item lg = {12}>
                                <div>
                                        Min Price
                                    </div>
                                </Grid>
                                <Divider/>
                                <Grid item lg = {12}>
                                        <Checkbox
                                            checked={minPrice === "0"}
                                            value="0"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        >
                                            Any
                                        </Checkbox>
                                    </Grid>
                                    <Divider/>
                                    <Grid item lg = {12}>
                                        <Checkbox
                                            checked={minPrice === "100000"}
                                            name="100k"
                                            value="100000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                            >
                                                $100,000
                                            </Checkbox>
                                    </Grid>
                                    <Divider/>

                                        <Grid item lg = {12}>
                                        <Checkbox
                                            checked={minPrice === "200000"}
                                            name="200k"
                                            value="200000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                            >
                                                $200,000
                                            </Checkbox>
                                        </Grid>      
                                        <Divider/>

                                        <Grid item lg = {12}>
                                        <Checkbox
                                            checked={minPrice === "300000"}
                                            name="300k"
                                            value="300000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        >
                                            $300,000
                                        </Checkbox>
                                        </Grid>   
                                        <Divider/>

                                        <Grid item lg = {12}>
                                        <Checkbox
                                            checked={minPrice === "400000"}
                                            name="400k"
                                            value="400000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                            >
                                                $400,000
                                            </Checkbox>
                                        </Grid>   
                                        <Divider/>

                                        </List>
                                </Grid>
                                <Grid item lg = {6}>
                                    <List>
                                    <Grid item lg = {12}>
                                    <div>
                                      Max Price
                                    </div>
                                    </Grid>  
                                    <Divider/>
                                    <Grid item lg = {12}>
                                        <Checkbox
                                            checked={maxPrice === "1000000"}
                                            value="1000000"
                                            onClick = { e => setMaxPrice(e.target.value)}
                                            color = "primary"
                                        > 
                                        Any 
                                        </Checkbox>
                                    </Grid>
                                    <Divider/>
                                        <Grid item lg = {12}>
                                        <Checkbox
                                            checked={maxPrice === "200000"}
                                            name="200k"
                                            value="200000"
                                            onClick = { e => setMaxPrice(e.target.value)}
                                            color = "primary"
                                        > 
                                        $200,000 
                                        </Checkbox>
                                    </Grid>    
                                    <Divider/>

                                        <Grid> 
                                                <Checkbox
                                                    checked={maxPrice === "400000"}
                                                    name="400k"
                                                    value="400000"
                                                    onClick = { e => setMaxPrice(e.target.value)}
                                                    color = "primary"
                                                >
                                                    $400,000
                                                </Checkbox>     
                                        </Grid>
                                        <Divider/>
                                        <Grid> 
                                                <Checkbox
                                                    checked={maxPrice === "600000"}
                                                    name="600k"
                                                    value="600000"
                                                    onClick = { e => setMaxPrice(e.target.value)}
                                                    color = "primary"
                                                >
                                                    $600,000
                                                </Checkbox>  
                                        </Grid>
                                        <Divider/>   
                                        <Grid> 

                                                <Checkbox
                                                    checked={maxPrice === "800000"}
                                                    name="800k"
                                                    value="800000"
                                                    onClick = { e => setMaxPrice(e.target.value)}
                                                    color = "primary"
                                                >
                                                    $800,000
                                                </Checkbox>  
                                        </Grid>   
                                        <Divider/>
                                        </List>

                                </Grid>
                            </Grid>
      );

    return(
        <div>
            <NavBar bg="true"/>
            <div id ="search" className = "marginTop100">
            <Container>
            <div className = {css.title}>
            <h2>
                Search For a Home
            </h2>                
            </div>
            <Grid container spacing = {3}>

                <Grid item xs = {12} lg = {3}>

                            <Select
                                    value={city}
                                    onChange={val => setCity(val)}
                                    variant = "outlined"
                                    placeholder = "City"
                                    style ={{width : "100%"}}
                                    size="large"
                            >                                
                                    <Option value = {"Melbourne"}> Melbourne</Option>
                                    <Option value={"Merritt%20Island"}>Merritt Island</Option>
                                    <Option value={"Cocoa%20Beach"}>Cocoa Beach</Option>
                                    <Option value = {"Satellite%20Beach"}>Satellite Beach</Option>
                                    <Option value = {"Titusville"}>Titusville</Option>
                                    <Option value ={"Mims"}>Mims</Option>
                                    <Option value ={"Cocoa"}>Cocoa</Option>
                                    <Option value ={"Rockledge"}>Rockledge</Option>
                                </Select>   
                </Grid>
                <Grid item lg = {3} xs = {12}>
                            <Select
                                    value={type}
                                    onChange={val => setType(val)}
                                    placeholder = "Type"
                                    size="large"
                                    style ={{ width : "100%"}}

                                >
                                    <Option value={"single_family"} >Single Family</Option>
                                    <Option value={"multi_family"}>Multi Family</Option>
                                    <Option value={"condo"}>Condo</Option>
                                    <Option value={"mobile"}>Mobile</Option>
                                    <Option value={"land"}>Land</Option>
                                    <Option value={"farm"}>Farm</Option>
                            </Select>                        
                </Grid>
                <Grid item xs = {12} lg = {3}>
                        <Select
                            value={features}
                            onChange={val => setFeatures(val)}
                            placeholder = "Features"
                            style ={{ width : "100%"}}
                            size = "large"
                        >
                            <Option value={"pool"} >Pool</Option>
                            <Option value={"waterfront"}>Waterfront</Option>
                        </Select>                        
                </Grid>
                <Grid item xs ={12} lg = {3} >
                    <Input 
                    placeholder="Min Square Footage"
                    size = "large" 
                    style = {{width:"100%"}}
                    onChange = {val => handleFootageChange(val)}
                    />
                </Grid>
                <Grid item xs ={12} lg = {3}>
                    <Input 
                    placeholder="Max Square Footage" 
                    onChange = {val => handleMaxFootageChange(val)}
                    size = "large" 
                    style = {{width:"100%"}}
                    />
                </Grid>
                <Grid item xs = {12} lg = {3}>
                        <Select
                            value={bedrooms}
                            onChange={val => setBedrooms(val)}
                            placeholder = "Bedrooms"
                            style ={{ width : "100%"}}
                            size = "large"
                        >
                            <Option value={1}>1</Option>
                            <Option value={2}>2</Option>
                            <Option value={3}>3</Option>
                            <Option value={4}>4</Option>
                            <Option value={5}>5</Option>
                            <Option value={6}>6</Option>
                            <Option value={7}>7</Option>
                            <Option value={8}>8</Option>
                            <Option value={9}>9+</Option>
                        </Select>                        
                </Grid>
                <Grid item xs = {12} lg ={3}>

                    <Select
                        value={bath}
                        onChange={val => setBaths(val)}
                        placeholder = "Bathrooms"
                        style ={{ width : "100%"}}
                        size = "large"
                    >
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                        <Option value={5}>5</Option>
                        <Option value={6}>6</Option>
                        <Option value={7}>7</Option>
                        <Option value={8}>8</Option>
                        <Option value={9}>9+</Option>
                    </Select>                          
                </Grid>  
                <Grid  item lg ={3} xs = {12} fullWidth> 
                <Dropdown overlay={menu} visible = {visible} onVisibleChange={handleVisibleChange}>
                    <Button size = "large" style = {{width: "100%"}} id = {css.price} placeholder = "Price" >
                        Price <DownOutlined id = {css.toggle}/>
                    </Button>
                </Dropdown>
                </Grid>              
                </Grid>
         
                    <Button onClick = {fetchProperties} variant = "outline-dark" size = "large" loading = {properties.length === 0 && clicked} style = {{marginTop : "30px"}}>
                        Search
                    </Button>               
            </Container>
            <Map properties = {properties} style = {{marginTop : "30px"}}/>
            {properties.length > 0 ? <SearchOutput properties = {properties}/> : <div> {error} </div> }
            </div>
        </div>
    );
}