import { Box, Typography,styled } from "@mui/material"
import { useState,useEffect } from "react";

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;
const Heading = styled(Typography)`
color: #878787;
`;
const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & >h6{
        margin-bottom: 20px;
    }
`;
const Price = styled(Typography)`
    float: right;
`;
const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`


const TotalView = ({cartItem}) => {
    const[price ,setPrice]=useState(0);
    const[discount ,setDiscount]=useState(0);
     
    useEffect(() => {
        const totalAmount = () => {
            let price = 0, discount = 0;
            cartItem.forEach((item) => {
                price += item.price.mrp
                discount += (item.price.mrp - item.price.cost) 
            })
            setPrice(price);
            setDiscount(discount);
        }
        totalAmount();
    }, [cartItem]);


    
  return (
     <Box>
        < Header>
            <Heading>PRICE DETAILS</Heading>
        </ Header>
        <Container>
            <Typography>Price ({cartItem?.length})
                <Price component='span'>₹{price}</Price>
             </Typography>
             <Discount>Discount
                <Price component='span'>-₹{discount} </Price>
             </Discount>
             <Typography>Delivery Charges
                <Price component='span'>₹40</Price>
             </Typography>
             <Typography variant="h6">Total Amount
                <Price component='span'>₹{price-discount+40}</Price>
             </Typography>
             <Discount>You  will save ₹{discount} on this order </Discount>
        </Container>
     </Box>
  )
}

export default TotalView
