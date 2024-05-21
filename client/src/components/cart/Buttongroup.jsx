import {  Button,ButtonGroup,styled } from "@mui/material"

const Component=styled(ButtonGroup)`
    margin-top:30px
`
const Btnstyle=styled(Button)`
    border-radius:50%
`
 
const Buttongroup = () => {
  return (
    <Component>    
        <Btnstyle>-</Btnstyle>
        <Button disabled>1</Button>
        <Btnstyle>+</Btnstyle>
    </Component>
  )
} 

export default Buttongroup
