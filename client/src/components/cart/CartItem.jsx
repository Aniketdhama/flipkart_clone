import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"
import { addEllipsis } from "../../Utils/Common-utils"
import Buttongroup from "./Buttongroup"
import {  useDispatch } from "react-redux"
import { removeFromCart } from "../../redux/actions/cartAction"
const Component=styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff
`
const LeftComponent=styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
    
    
`
//
const SmallText=styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:15px
`
//
const Remove=styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600
`


const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch=useDispatch()
    const removeItem=(id)=>{
        dispatch(removeFromCart(id))
    }

  return (
     <Component>
        <LeftComponent>
            <img src={item.url} alt="items" style={{ height: 120, width: 120 }} />
            <Buttongroup/>
        </LeftComponent>
        <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller:RetailNet
                <Box component='span'>
                    <img src={fassured} alt="fasss" style={{width:50,marginLeft:10}} />
                </Box>
            </SmallText>
            <Typography>
                <span style={{ fontWeight:600,fontSize:18 }}>₹{ item.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                <span style={{ color: '#878787' }}><strike>₹{ item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                <span style={{ color: '#388E3C' }}>{ item.price.discount} off</span>
            </Typography>
            < Remove onClick={()=>removeItem(item.id)}>Remove</ Remove>
        </Box>
     </Component>
  )
}

export default CartItem
