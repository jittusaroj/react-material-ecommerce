import {  Paper, Typography , Box} from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer() {
    return (
        <>
            
                <Paper  sx={{p:1,background:'black',color:'white',borderRadius:'0px',marginTop:'20px'}}>
                    <Typography varient="p">
<center><Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><FavoriteBorderIcon/> <p>  All right reserved powered </p></Box></center>
                    </Typography>
                </Paper>
            
        </>
    )
}

export default Footer
