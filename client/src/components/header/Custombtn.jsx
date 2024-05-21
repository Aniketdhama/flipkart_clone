import { Badge, Box ,Button,Typography,styled} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// logi dailog for login 
import Logindialog from "../login/Logindialog";
import { useState ,useContext} from "react";
import { DataContext } from "../../context/Dataprovider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
//p is for typograpghy css in child element 
 const StyleBox= styled(Box)(({ theme }) => ({
   margin: '0 3% 0 auto',
   display: 'flex',
   '& > *': {
       marginRight: '40px !important',
       textDecoration: 'none',
       color: '#FFFFFF',
       fontSize: 12,
       alignItems: 'center',
       [theme.breakpoints.down('sm')]: {
           color: '#2874f0',
           alignItems: 'center',
           display: 'flex',
           flexDirection: 'column',
           marginTop: 10
       }
   },
   [theme.breakpoints.down('sm')]: {
       display: 'block'
   }
}));
 //
 const Container = styled(Box)(({ theme }) => ({
   display: 'flex',
   [theme.breakpoints.down('sm')]: {
       display: 'block'
   }
}));

 //login btn style 
 const Loginbtn=styled(Button)`
    color:#2874f0;
    background:#FFF;
    text-transform:none;
    padding:5px 40px;
    border-radius:none;
    box-shadow:none;
    font-weight:600;
 `

const Custombtn = () => {
   const [open ,setOpen]=useState(false);
   const{account,setAccount}=useContext(DataContext)
   const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

   const opendialog=()=>{
      setOpen(true);
   }
   const Icon = styled(Link)(({ theme }) => ({
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
          display: 'block'
      }
  }));

  return (
   <Container>
      <StyleBox>
      {
         account?<Profile account={account} setAccount={setAccount} style={{marginLeft:30}}/>:
         <Loginbtn variant="contained" style={{marginLeft:30}} onClick={()=> opendialog()} > LogIn</Loginbtn>
      }
         

        <Typography style={{marginTop:5,width:135}}>Become a seller</Typography>
        <Typography style={{marginTop:5,width:135}}>More</Typography>
        
            <Icon to='/cart'>
               <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon/>
               </Badge>
            <Typography style={{marginLeft:9}} >Cart</Typography>
            </Icon>
        
        <Logindialog open={open} setOpen={setOpen} />
     </StyleBox>
   </Container>
      
  )
}

export default Custombtn
