 
import{Box, Button, Dialog, TextField, Typography,styled}from "@mui/material"
import { useState,useContext } from "react"
//for singup page
import { authenticatesignup , authenticateLogin} from "../../service/api"

import { DataContext } from "../../context/Dataprovider"


//csss 
//styled for outer box
const Container=styled(Box)`
     height:70vh;
     width:90vh;
     display:flex
`
//left side components
//center 85% and no reapet is css in link 
const Image=styled(Box)`
     background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;;
     height:82.7%;
     width:30%;
     padding:45px 35px;
     &>p,&>h5{
        color:#FFFFFF;
        font-weight:600
     }
`
const Wrapper=styled(Box)`
     display:flex;
     flex-direction:column;
     padding:25px 35px;
     flex:1;
     &>div,&>buttuon{
        margin-top:20px;
     }
`
//login buttuon
const Loginbutton=styled(Button)`
     text-transform:none;
     background:#FB641B;
     color:#fff;
     height:48px;
     border-radius:2px
     
`
const OTPButton=styled(Button)`
     text-transform:none;
     background:#fff;
     color:#2874f0;
     height:48px;
     border-radius:2px;
     box-shadow:0 2px 4px 0 rgba(0 0 0/ 20%)

`
const Text=styled(Typography)`
     font-size:12px;
     color:#878787;
     margin:20px 0 10px 0;
`
const Createaccount = styled(Typography)`
margin: auto 0 5px 0;
text-align: center;
color: #2874f0;
font-weight: 600;
font-size: 14px;
cursor:pointer
`

const accountInitalvalue={
    login:{
        view:'login',
        heading:"login",
        subHeaidng:"Get access to your orders,whishlist and recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeaidng:"Sign up with your mobile number to get started"
    }
}
//signup st0ring value
const signupstoringvalue={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    mobileno:'',
    password:''
} 
//loginn button
const loginitalValue={
    username:'',
    password:''
}
//error css
const Error=styled(Typography)`
    font-size:14px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600
`



 const Logindialog = ({open,setOpen}) => {
    const [account,toggleAccount]=useState(accountInitalvalue.login)
    const [signup,setSignup]=useState(signupstoringvalue)
    const{setAccount}=useContext(DataContext)
    const [login ,setLogin]=useState(loginitalValue)
    const[error,setError]=useState(false)
     const handleclose=()=>{
        setOpen(false);
        toggleAccount(accountInitalvalue.login)
     }
     const togglesignup=()=>{
        toggleAccount(accountInitalvalue.signup)
     }
     const onInputChange=(e)=>{
            setSignup({...signup,[e.target.name]:e.target.value})
            console.log(signup);
     }

     //after click on continue we will go on sign up button 
     const signupUser=async()=>{
         let response= await  authenticatesignup(signup)
         if(!response)return;
         handleclose();
         setAccount(signup.firstname);
     }

     const onValueChange=(e)=>{
            setLogin({...login,[e.target.name]:e.target.value})
     }

     const loginUser=async()=>{
        let respons= await authenticateLogin(login)
        console.log( respons);
        if(respons.status===200){
            handleclose();
            setAccount(respons.data.data.firstname)
        }else{
            setError(true);
        }
     }
 

  return (
    //PaperProps={{sx:{maxWidth:'unset'}}} this is uded for reducing width 
     <Dialog open={open} onClose={handleclose} PaperProps={{sx:{maxWidth:'unset'}}} >
        <Container>
             <Image>
                <Typography variant="h5" >{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeaidng}</Typography>
             </Image>

             {
                account.view==='login'?
            <Wrapper>
                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="username" label="Enter username"/>
                { error&& <Error>Invalid username</Error>}
                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password"/>
                <Text>By continuing ,you agree to Flipkart's terms of use and privacy policy</Text>
                <Loginbutton onClick={()=>loginUser()}>LogIn</Loginbutton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <OTPButton> Request OTP</OTPButton>
                <Createaccount onClick={()=>togglesignup()} >New to flipkart? Create an account</Createaccount>
            </Wrapper>
            :
            <Wrapper>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="First-Name"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Last-Name"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Email"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="mobileno" label="Mobile number"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password"/>
                 
                <Loginbutton onClick={()=>signupUser()}>Continue</Loginbutton>
             </Wrapper>
            }
        </Container>
     </Dialog>
  )
}

export default Logindialog
