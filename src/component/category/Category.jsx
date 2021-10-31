import { Card, CardContent, Divider,Paper, Container, Typography } from '@mui/material';
import ProductCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2500, min: 1600 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 1500, min: 1400 },
        items: 8
    },
    ipadpro: {
        breakpoint: { max: 1200, min: 1020 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1000, min: 700 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 3
    }
};
// const image = 'https://swall.teahub.io/photos/small/124-1241309_previous-wallpaper-slider.jpg';
const images = [
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/3450e4be3b9d6d3b.jpg?q=100',
        title:'Mobile'
    },
    {
        img: 'https://rukminim1.flixcart.com/image/200/200/knoxnrk0/mobile/s/d/d/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcxrhhuwfh.jpeg?q=70',
        title:'Fashion'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/38773f7201f9b9be.png?q=100',
        title:'Electronics'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/69d3da6eb3f00514.png?q=100',
        title:'Home'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/5106ad42292a883d.png?q=100',
        title:'Travel'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/39c66f9cc1d82569.png?q=100',
        title:'Appliances'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100',
        title:'Furniture'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/bd1572c1e4cadd2b.png?q=100',
        title:'Beauty,Toys & more'
    },
    {
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/798ca135a6c13d97.png?q=100',
        title:'Grocery'
    },
    {
        img: 'https://rukminim1.flixcart.com/image/200/200/k9x3v680/musical-keyboard/h/k/t/kh38-cbc700-black-casio-original-imafrhtdshpfmftj.jpeg?q=70',
        title:'Latest products'
    }
]
const Category = () => {
    return (
        <>
            <Container fluid maxWidth={false} >
                <Paper elevation={1}  style={{ p: 3 ,marginTop:'10px',marginBottom:'10px'}}>
                    <CardContent >
                    <Typography style={{fontSize:20,marginBottom: 10}}>Category</Typography>
                       
                        <Divider/>
                        <ProductCarousel
                            xs={{ p: 3 }}
                            swipeable={true}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            infinite={true}
                            autoPlaySpeed={100}
                            keyBoardControl={true}
                            customTransition="transform 300ms ease-in-out"
                            transitionDuration={200}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            
                        >
                            {
                                images.map((image) => (
                                    <center> <Card style={{ boxShadow: 'none' }}>
                                        <img src={image.img} style={{height:'90px',width:'90px',marginTop:'20px',borderRadius:'50%'}} alt="" />
                                        <CardContent style={{padding:'0px'}}>
                                            <Typography gutterBottom variant="h6" component="div" style={{fontSize:'16px'}}>
                                               {image.title}
                                            </Typography>
                                          
                                        </CardContent>
                                    </Card></center>
                                ))
                            }
                        </ProductCarousel>
                    </CardContent>
                </Paper>
            </Container>

        </>
    )
}

export default Category
