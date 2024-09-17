import React,{useState} from 'react';
import {Grid,} from "@mui/material";
import Wrapper from "./Wrapper.jsx";
import Screen from "./Screen.jsx";
import Buttonclk from "./Button.jsx";


const btnValues = [
    ["Ac", "Bs", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];


const Calculator = ()=>{
    const [input, setInput] = useState("0");
    const [expression, setExpression] = useState("");

    const handleButtonClick = (value) => {
        setInput((prev) => {
            // Handle percentage
            if (value === "%") {
                return (parseFloat(prev) / 100).toString();
            }

            // Handle backspace (remove the last character)
            if (value === "Bs") {
                return prev.length > 1 ? prev.slice(0, -1) : "0";
            }

            // If the initial input is "0", replace it with the clicked value, otherwise append the value
            if (prev === "0" && value !== "." && value !== "0") {
                return value.toString();
            }
            return prev + value;
        });
    };

    const handleClear = () => {
        setExpression("")
        setInput("0");
    };

    const handleCalculate = () => {
        try {
            setExpression((prev)=>{
                return prev + input
            })
            setInput(eval(input).toString());

        } catch (error) {
            setInput("Error");
        }
    };
    return(
        <>

                <Wrapper>
                    <Screen value={input} expression={expression} />
                        {
                            btnValues.flat().map((item, i) => {
                                return (
                                    <Grid item xl={3} sm={item === 0 ? 6 : 3 } xs={3} key={i} p={0} sx={{display:'flex',justifyContent:'center',width:`${item != "0" ? "" : "100px"}`}} >

                                        <Buttonclk
                                            value={item}
                                            onClick={() => (
                                                item === "="
                                                ? handleCalculate()
                                                : item !== "Ac"
                                                    ? handleButtonClick(item)
                                                    : handleClear())}
                                        />

                                    </Grid>
                                );
                            })
                        }
                </Wrapper>
        </>
    )
}
export default Calculator;