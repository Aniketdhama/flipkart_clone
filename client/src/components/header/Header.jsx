
import{AppBar,Toolbar,styled,Typography,Box,IconButton,Drawer,List} from '@mui/material'
import { Menu} from '@mui/icons-material';
import Search from './Search'
import Custombtn from './Custombtn'
import { Link } from 'react-router-dom'
import { useState } from 'react';



//styled is used for css in material ui 
const StyleHeader=styled(AppBar)`
     background:#2874f0;
     height:55px;
`
//styled for box
const Components=styled(Link)` 
    margin-left:12%;
    line-height:0;
    text-decoration:none;
`
//styled for typography whuch is used for fonts weight 
const Subheading=styled(Typography)`
    font-size:10px;
    font-style:italic;
`
//how to style html components
const Plusheading=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})
//custom button
const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

//icon Button
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
 
   

     

const Header=()=>{
    const logoURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const[open,setOpen]=useState(false)
    //function
const handleopen=()=>{
   setOpen(true)
}
const handleClose=()=>{
    setOpen(false)
}
//lissttt iteem 
const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
        <List>
            <listItem button>
                <Custombtn />
            </listItem>
        </List>
    </Box>
);

    return(
         <StyleHeader>
            <Toolbar style={{minHeight:55}}>
                <MenuButton color='inherit'onClick={handleopen}>
                    <Menu/>
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Components to='/'>
                <img src={logoURL} alt='logo' style={{width:75}}/>
                <Box style={{display:'flex'}}>
                 <Subheading>Exlpore &nbsp;
                    <Box component='span' style={{color:'#FFE500'}}>Plus</Box>
                 </Subheading>
                 <Plusheading src={subURL} alt="sub-heading" />
                </Box>
                </Components>
                <Search/>
                <CustomButtonWrapper>
                  <Custombtn/>   
                </CustomButtonWrapper>
                 
            </Toolbar>
         </StyleHeader>
    )
}

export default Header;