import React from "react"
import Slider from "@material-ui/core/Slider"
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles(theme => ({
    root: {
      width: 300 + 24 * 2,
      padding: 24
    },
    margin: {
      height: theme.spacing(1)
    }
  }));


const PrettoSlider = withStyles({
    root: {
      color: '#3f51bf',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  function valuetext(number,d){
    if (number === 1000000){
        return "1m +"
    }
    const decPlaces = Math.pow(10,0);
    var abbrev = [ "k", "m", "b", "t" ];
            for (var i=abbrev.length-1; i>=0; i--) {
                var size = Math.pow(10,(i+1)*3);
                if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;
             if((number === 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             number += abbrev[i];
             break;
        }
    }

    return number;

}
  

  const CustomSlider = ({ label, price, setPrice }) => {

    const classes = useStyles();
    return (
        <div>
        <PrettoSlider
            value={price}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            valueLabelFormat = {valuetext}
            min = {25000}
            variant = "outlined"
            max = {1000000}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
            onChange={(event, v) => {
                setPrice(v);
            }}
        />
        </div>
    );
  };
  export default CustomSlider;