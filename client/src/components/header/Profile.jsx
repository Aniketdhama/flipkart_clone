import { Box,Typography,Menu,MenuItem,styled } from "@mui/material"
import {  useState } from "react"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
//csss menuu
const Components=styled(Menu)`
        margin-top:5px;
        margin-left:8;
`
 

const Profile = ({account,setAccount}) => {
const[open ,setOpen]=useState(false);

const handleClick=(event)=>{
    setOpen(event.currentTarget);
}

//handle 
const handleClose=()=>{
    setOpen(false)
}
//
const Logoutuser=()=>{
    setAccount('')
}

  return (
    <>
    <Box onClick={handleClick}>
      <Typography style={{marginLeft:30,marginRight:20,cursor:"pointer"}}>{account}</Typography>
    </Box>
    <Components
         
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
         
      >
        <MenuItem onClick={()=>{handleClose();Logoutuser()}}>
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Typography style={{marginLeft:'5px'}}>Logout</Typography>
        </MenuItem>
         
      </Components>
    </>
  )
}

export default Profile
