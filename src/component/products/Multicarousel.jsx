import { Card, CardContent,Divider,Paper, Container, Typography } from '@mui/material';
import ProductCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {images,responsive} from '../../setting/constants'
const Multicarousel = ({catename}) => {
    return (
        <>
            <Container fluid maxWidth={false} >
                <Paper elevation={1}  style={{ p: 3,marginTop:'15px' }}>
                    <CardContent>
                        <Typography style={{fontSize:20,marginBottom: 10}}>{catename? catename:'Heading'}</Typography>
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
                                            <img src={image.img} alt="" style={{marginTop:"20px"}}  />
                                            <CardContent >
                                                <p style={{color:'black',marginBottom:0,marginTop:5}}>
                                                Micromax IN Note 1 
                                                </p>
                                                <p style={{color:'#388e3c',marginBottom:0,marginTop:10}}> Up to 80% Off</p>
                                                <p style={{marginTop:10,color:'rgba(0, 0, 0, 0.4)'}}>Miss & Chief, Simba & more</p>
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

export default Multicarousel
