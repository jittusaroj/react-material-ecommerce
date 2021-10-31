import React from 'react'
import {Paper,Grid,Container } from '@mui/material'
const images = [
    {
        img: 'https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg'
    },
    {
        img: 'https://img.global.news.samsung.com/in/wp-content/uploads/2021/09/9189-CE-Ganesh-Chaturthi-Newsroom-KV-1200wx627h-pixels-Eng-01-1024x535.jpg'
    },
    {
        img: 'https://images.samsung.com/is/image/samsung/assets/in/offer/smartplaza/smt_sep_l.jpg?$ORIGIN_JPG$'
    }
]
const Banner = props => {
    return (
        <Container fluid maxWidth={false} style={{marginTop:"30px"}}>
        <Paper style={{background:"transparent",boxShadow:'none'}}>
            <Grid container spacing={2}>
            { images.map((banner)=>(
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={banner.img} style={{width:"100%",height:"250px"}} alt="" />
                </Grid>
            ))}
                
            </Grid>
        </Paper>
    </Container>
    )
}



export default Banner
