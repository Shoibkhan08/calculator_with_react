import React from 'react'
import Calculator from "./component/Calculator.jsx";
import {Grid} from "@mui/material";

function App() {
  return (
      <>
          <Grid container sx={{display: 'flex', justifyContent: 'center',alignItems:'center' ,height:"100vh"}}>
              <Calculator/>
          </Grid>
      </>
  )
}

export default App
