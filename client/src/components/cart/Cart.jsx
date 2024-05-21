import { Box, Button, Grid, Typography,styled } from "@mui/material"
import {  useSelector } from "react-redux"
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./Emptycart";
import { payUsingPaytm } from "../../service/api";
import{ post} from "../../Utils/Paytm";



//csss
const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const Header=styled(Box)`
    padding:15px 24px;
    background:#fff
`
const ButtonWrapper=styled(Box)`
     padding:16px 22px;
    background:#fff;
    box-shadow:0 2px 10px 0 rgb(0 0 0 /10%);
    border-top:1px solid #fefefe
`
const StyledButton=styled(Button)`
    margin-left:auto;
    display:flex;
    background:#fb641b;
    color:#fff;
    width:150px;
    border-radius:5px
`
const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Cart = () => {
    const { cartItems }=useSelector(state=>state.cart);
    const Buynow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
  return (
    <>
       { cartItems.length?
        <Container container>
            < LeftComponent item lg={8} md={8} sm={12}>
                <Header>
                    <Typography>My cart ({cartItems.length})</Typography>
                </Header>
                {
                    cartItems.map(item=>(
                        <CartItem item={item}/>
                    ))
                }
                <ButtonWrapper>
                    < StyledButton onClick={()=>Buynow()} >Place Order</ StyledButton>
                </ButtonWrapper>
            </ LeftComponent>
            <Grid item lg={3} md={3} sm={12}>
                <TotalView cartItem={cartItems}/>
            </Grid>
        </Container>:<EmptyCart/>
       }
    </>

  )
}

export default Cart

