 
import {Box,Button,styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import{ post} from "../../Utils/Paytm";
 //cssss
 const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 5px 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))
 
//
const Image=styled('img')({
     padding:15,
    width:'85%',
    alignItems:'center'
})
//Button
const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    
`;

const Actionview = ({product}) => {
    const [quantity,setQUantity]=useState(1);

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const{id}=product
    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity))
        navigate('/Cart')
    }
    //payment function
    
    //
    const Buynow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }



  return (
     <LeftContainer>
        <Box style={{padding:'15px 20px', border:'1px solid #f0f0f0',}}>
        <Image src={product.url} alt="imagee" />
        </Box>
         
        <StyledButton variant="contained" style={{marginRight:5,background:'#ff9f00'}} onClick={()=>addItemToCart()}><ShoppingCartIcon/> Add to Cart</StyledButton>
        <StyledButton variant="conatined" onClick={()=>Buynow()} style={{background:'#fb541b'}}><FlashOnIcon/> Buy Now</StyledButton>

     </LeftContainer>
  )
}

export default Actionview
