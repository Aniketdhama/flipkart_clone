 import{Box,Table,TableBody,TableCell,Typography,TableRow, styled} from "@mui/material"
 import {LocalOffer as Badge} from '@mui/icons-material';

 const Smalltext=styled(Box)`
 font-size:14px;
 vertical-align:baseline;
 &>p{
    font-size:14px;
    margin-top:10px
 }
 `
 //badge
 const StyleBadge=styled(Badge)`
    margin-right:10px;
    color:#00CC00;
    font-size:15px
 `
 //table row
 const ColumnText=styled(TableRow)`
    font-size:14px;
    vertical-align:basline; 
    &>td{
        font-size:14px;
        margin-top:10px;
        border:none
    }
 `

const Productdetails = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date=new Date(new Date().getTime()+5*24*60*60*1000)
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
             82 Ratings & 1 Review
            <Box component='span' ><img src={fassured} style={{width:77,marginLeft:20}} alt="" /></Box>
        </Typography>
        <Typography>
                <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
        </Typography>
        <Typography> Available offers</Typography>
        <Smalltext> 
            <Typography><StyleBadge/>Get extra 20% off up to ₹50 on 1 item(s) T&C</Typography>
            <Typography><StyleBadge/>Get extra 13% off (price inclusiveof discount) T&C</Typography>
            <Typography><StyleBadge/>Buy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
            <Typography><StyleBadge/>Sign up for Flipkart Pay Later and Get Flipkart Gift Card Worth ₹100* Know More </Typography>
            <Typography><StyleBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><StyleBadge/>No Cost EMI on Bajaj finersy EMI Card on Value Above ₹2999 </Typography>
        </Smalltext>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color:'#878787'}} >Delivery</TableCell>
                    <TableCell style={{fontWeight:600}} >delivery by {date.toDateString()} | ₹40 </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}} >Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}} >Seller</TableCell>
                    <TableCell> 
                        <Box component='span' style={{color:'#2874f0'}} >SuperComNet</Box>
                        <Typography>GST Invoice Available </Typography>
                        <Typography>View more Seller starting from ₹{product.price.cost} </Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} alt="Flipp" style={{width:390}} />
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}} >Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>
  )
}

export default Productdetails
