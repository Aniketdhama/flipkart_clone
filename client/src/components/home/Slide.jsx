
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {Box, Button, Typography,Divider, styled } from "@mui/material";
import Countdown from 'react-countdown'
import { Link } from "react-router-dom";


//cssss for box
const Component=styled(Box)`
    margin-top:10px;
    background:#FFFFFF
`
//deal css
const Deal=styled(Box)`
    padding:15px 20px;
    display:flex
`
//time css
const Timer=styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    color:#7f7f7f
`
//deL
const Dealtext=styled(Typography)`
    font-size:22px;
    font-weight:600;
    margin-right:25px;
    line-height:32px
`
//butotn
const Viewbutton=styled(Button)`
    margin-left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600
`
//const Img=styled('img')
const Image=styled('img')({
    width:'auto',
    height:150
})
//css deal image tag
const Text=styled(Typography)`
    font-size:14px;
    margin-top:5px
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    }
};
const Slide=({products,title,timer})=>{
    const timeurl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const render=({hours,minutes,seconds})=>{
        return<Box variant="span">{hours}:{minutes}:{seconds} Left </Box>
    }
    return(
        <Component>
            <Deal>
                <Dealtext>{title}</Dealtext>
                {
                    timer &&
                    <Timer>
                    <img src={timeurl} alt="" style={{width:24}} />
                    <Countdown date={Date.now()+5.04e+7} renderer={render} />
                    </Timer>
                }
                 
                <Viewbutton variant="contained" color="primary" >View All</Viewbutton>
            </Deal>
            <Divider/>
             <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}  
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                     {
                       products.map(product=>(
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}  >
                          <Box style={{padding:"25px 15px"}}> 
                          <Image src={product.url} alt="product" />
                          <Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Text>
                          <Text style={{color:'green'}}>{product.discount} </Text>
                          <Text style={{color:'#212121',opacity:'.6'}}>{product.tagline} </Text>
                        </Box>
                        </Link>
                         
                         ))
                     }   
            </Carousel>
        </Component>
         
    )
}
export default Slide;