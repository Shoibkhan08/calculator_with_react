import React from 'react'
import {Grid} from "@mui/material";

const Wrapper = ({ children }) => {
    return <Grid container width={340} height={540} sx={{
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: '#242424',
    }}>
        {children}
    </Grid>;
};

export default Wrapper;