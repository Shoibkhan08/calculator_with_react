import {Button} from '@mui/material'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const Buttonclk = ({value, onClick }) => {
    return (
        <Button onClick={onClick} sx={{
            fontSize:"25px",
            borderRadius:'10px',
            height:"60px",

            background:`${["*", "/", "%","=","-","+"].includes(value) ? "#1976d2" : ["Ac","Bs"].includes(value) ? "grey" : "#424242" }`,
            color:`${["Ac","c","*", "/", "%","-","+","=","Bs"].includes(value)  ? "lightgray" : "" }`,
            width:`${value != "0" ? "" : "90%"}`,
            px:`${value != "0" ? "" : "2px"}`,

            }}>
            {value}
        </Button>
    );
};

export default Buttonclk;