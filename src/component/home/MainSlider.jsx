
import ProductCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2500, min: 1600 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 1500, min: 1400 },
        items: 1
    },
    ipadpro: {
        breakpoint: { max: 1200, min: 1020 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1000, min: 700 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};
// const image = 'https://swall.teahub.io/photos/small/124-1241309_previous-wallpaper-slider.jpg';
const images = [
    {
        img: 'https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg'
    },
    {
        img: 'https://static.vecteezy.com/system/resources/previews/002/654/480/non_2x/summer-sale-offer-banner-template-with-3d-cylinder-podium-product-display-with-green-tropical-monstera-leaves-plant-and-blue-background-vector.jpg'
    },
    {
        img: 'https://img.global.news.samsung.com/in/wp-content/uploads/2021/09/9189-CE-Ganesh-Chaturthi-Newsroom-KV-1200wx627h-pixels-Eng-01-1024x535.jpg'
    },
    {
        img: 'https://images.samsung.com/is/image/samsung/assets/in/offer/smartplaza/smt_sep_l.jpg?$ORIGIN_JPG$'
    }
]
const MainSlider = ({catename}) => {
    return (
        <>
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
                                    
                                        <img src={image.img} style={{height:'600px',width:'100%'}} alt="" />
                                        
                                    
                                ))
                            }
                        </ProductCarousel>

        </>
    )
}

export default MainSlider

