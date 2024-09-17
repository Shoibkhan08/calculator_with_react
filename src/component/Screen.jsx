
import "../Screen.css";
import {Grid} from "@mui/material";

const Screen = ({ value ,expression }) => {
    // console.log(value)
    return (
        <Grid container className="screen" mode="single" max={70}>
            <Grid item className="exp" sm={12}>{expression}</Grid>
            <Grid item sm={12}>{value}</Grid>

        </Grid>
    );
};

export default Screen;