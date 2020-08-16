import React,{useState} from "react"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from "react-bootstrap/Button"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import Container from 'react-bootstrap/Container'
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import css from "./SearchForm.module.css"
import Grid from "@material-ui/core/Grid"
import SearchOutput from "./SearchOutput";
import { CircularProgress, Checkbox, FormControlLabel, Radio, Divider } from "@material-ui/core";
import NavBar from "./NavBar";
import Map from "./Map"
import CustomSlider from "./CustomSlider";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";

export default function SearchForm(){


    const [city, setCity] = useState();
    const [price, setPrice] = useState([0, 400000]);
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

    console.log(minPrice)

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(.5),
          minWidth: 120
        },
        selectEmpty: {
          marginTop: theme.spacing(1),
        },
      }));


      
      
      

        const classes = useStyles();
      
        const handlePrice = (event, newValue) => {
          setPrice(newValue);
          
        };


    function handleClick(props){
        setCity(props);
    }

    function fetchProperties(props){    

        setClicked(true)
        var max; 
        if (maxPrice === 1000000){
            max = "";
        }
        else{max = "&price_max=" + maxPrice}
        const forSaleUrl = "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relavance&city=" + city + "&limit=200&state_code=FL&sqft_min=" + footage[0] + "&baths_min=" + bath + "&beds_min=" + bedrooms + "&features=" + features + "&price_min=" + minPrice + max + "&prop_type=" + type + "&sqft_max=" + footage[1];
       
        fetch('/apis/search',{
            method : 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({url : forSaleUrl})
        })
        .then(r => r.json())
        .then(r => {
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

    //console.log(properties)
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

                <Grid item xs = {12} lg = {2}>
                    <FormControl className={classes.formControl} fullWidth = {true}>
                    <InputLabel  className = "marginLeft5" >Cities</InputLabel>
                                <Select
                                    value={city}
                                    onChange={e => handleClick(e.target.value)}
                                    variant = "outlined"
                                >
                                    <MenuItem value = {"Melbourne"}> Melbourne</MenuItem>
                                    <MenuItem value={"Merritt%20Island"}>Merritt Island</MenuItem>
                                    <MenuItem value={"Cocoa%20Beach"}>Cocoa Beach</MenuItem>
                                    <MenuItem value = {"Satellite%20Beach"}>Satellite Beach</MenuItem>
                                    <MenuItem value = {"Titusville"}>Titusville</MenuItem>
                                    <MenuItem value ={"Mims"}>Mims</MenuItem>
                                    <MenuItem value ={"Cocoa"}>Cocoa</MenuItem>
                                    <MenuItem value ={"Rockledge"}>Rockledge</MenuItem>
                                </Select>   
                    </FormControl>                  
                </Grid>
                <Grid item lg = {2} xs = {12}>
                    <FormControl className={classes.formControl} fullWidth = {true}>
                        <InputLabel className = "marginLeft5">Type</InputLabel>
                            <Select
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                    variant = "outlined"

                                >
                                    <MenuItem value={"single_family"} >Single Family</MenuItem>
                                    <MenuItem value={"multi_family"}>Multi Family</MenuItem>
                                    <MenuItem value={"condo"}>Condo</MenuItem>
                                    <MenuItem value={"mobile"}>Mobile</MenuItem>
                                    <MenuItem value={"land"}>Land</MenuItem>
                                    <MenuItem value={"farm"}>Farm</MenuItem>
                            </Select>                        
                    </FormControl>  
                </Grid>
                <Grid item xs = {12} lg = {2}>
                    <FormControl className={classes.formControl} fullWidth = {true}>
                        <InputLabel  className = "marginLeft5">Features</InputLabel>
                        <Select
                            value={features}
                            onChange={e => setFeatures(e.target.value)}
                            variant = "outlined"

                        >
                            <MenuItem value={"pool"} >Pool</MenuItem>
                            <MenuItem value={"waterfront"}>Waterfront</MenuItem>
                        </Select>                        
                    </FormControl>
                </Grid>
                <Grid item xs ={12} lg = {3} >
                    <FormControl className={classes.formControl} noValidate autoComplete="off " fullWidth = {true}>
                    <TextField id="outlined-basic" label="Min Square Footage" variant = "outlined" onChange = {e => handleFootageChange(e.target.value)}/>
                    </FormControl>
                </Grid>
                <Grid item xs ={12} lg = {3}>
                    <FormControl className={classes.formControl} noValidate autoComplete="off" fullWidth = {true}>
                    <TextField id="outlined-basic" label="Max Square Footage" variant = "outlined" onChange = {e => handleMaxFootageChange(e.target.value)}/>
                    </FormControl>                
                </Grid>
                <Grid item xs = {12} lg = {2}>
                    <FormControl className={classes.formControl} fullWidth = {true}>
                        <InputLabel className = "marginLeft5">Bedrooms</InputLabel>
                        <Select
                            value={bedrooms}
                            onChange={e => setBedrooms(e.target.value)}
                            variant = "outlined"

                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9+</MenuItem>
                        </Select>                        
                    </FormControl> 
                </Grid>
                <Grid item xs = {12} lg ={2}>
                    <FormControl className = {classes.formControl} fullWidth = {true}>
                    <InputLabel  className = "marginLeft5" >Bathrooms</InputLabel>
                    <Select
                        value={bath}
                        onChange={e => setBaths(e.target.value)}
                        variant = "outlined"

                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9+</MenuItem>
                    </Select>    
                    </FormControl>                         
                </Grid>  
                <Grid  item lg ={8} xs = {12}> 
                <DropdownButton variant = "outline-secondary" title = "Price" size = "md" className={classes.formControl} fullWidth = {true}>
                            <Grid container item>
                                <Grid container item lg = {6}> 
                                <Grid item lg = {12}>
                                <div>
                                        Minimum Price
                                    </div>
                                </Grid>
                                <Grid item lg = {12}>
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={minPrice == "100000"}
                                            name="100k"
                                            value="0"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="Any"
                                    />    
                                    </Grid>
                                    <Grid item lg = {12}>
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={minPrice == "100000"}
                                            name="100k"
                                            value="100000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="$ 100,000"
                                    />    
                                    </Grid>
                                        <Grid item lg = {12}>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={minPrice == "20000"}
                                            name="200k"
                                            value="200000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="$ 200,000"
                                    />  
                                        </Grid>      
                                        <Grid item lg = {12}>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={minPrice == "300000"}
                                            name="300k"
                                            value="300000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="$ 300,000"
                                    />  
                                        </Grid>   
                                        <Grid item lg = {12}>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={minPrice == "400000"}
                                            name="400k"
                                            value="400000"
                                            onClick = { e => setMinPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="$ 400,000"
                                    />  
                                        </Grid>   
                                </Grid>
                                <Grid item lg = {6}>
                                    <Grid item lg = {12}>
                                    <div>
                                      Maximum Price
                                    </div>
                                    <Grid item lg = {12}>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={maxPrice == "1000000"}
                                            name="200k"
                                            value="1000000"
                                            onClick = { e => setMaxPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="Any"
                                    />  
                                    </Grid>  
                                    </Grid>
                                        <Grid item lg = {12}>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={maxPrice == "200000"}
                                            name="200k"
                                            value="200000"
                                            onClick = { e => setMaxPrice(e.target.value)}
                                            color = "primary"
                                        />
                                        }
                                        label="$ 100,000"
                                    />  
                                    </Grid>    
                                        <Grid> 
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={maxPrice == "400000"}
                                                    name="400k"
                                                    value="400000"
                                                    onClick = { e => setMaxPrice(e.target.value)}
                                                    color = "primary"
                                                />
                                                }
                                                label="$ 400,000"
                                            />      
                                        </Grid>
                                        <Grid> 
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={maxPrice == "600000"}
                                                    name="600k"
                                                    value="600000"
                                                    onClick = { e => setMaxPrice(e.target.value)}
                                                    color = "primary"
                                                />
                                                }
                                                label="$ 600,000"
                                            />      
                                        </Grid>   
                                        <Grid> 
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={maxPrice == "800000"}
                                                    name="800k"
                                                    value="800000"
                                                    onClick = { e => setMaxPrice(e.target.value)}
                                                    color = "primary"
                                                />
                                                }
                                                label="$ 800,000"
                                            />      
                                        </Grid>   
                                          
                                </Grid>
                            </Grid>
                </DropdownButton>
                </Grid>              
                </Grid>
                <div id = {css.searchButton}>
                    {properties.length === 0 && clicked ? 
                    <CircularProgress/>
                    :           
                    <Button onClick = {fetchProperties} variant = "outline-dark">
                        Search
                    </Button>}                
                </div> 
            </Container>
            <Map properties = {properties}/>
            {properties.length > 0 ? <SearchOutput properties = {properties}/> : <div> {error} </div> }
            </div>
        </div>
    );
}