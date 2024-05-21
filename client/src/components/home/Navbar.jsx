 
import { Box ,Typography,styled} from "@mui/material"
import { navData } from "../../constants/data"

//nav csss
const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))
//inside component
const Container=styled(Box)`
    padding:12px 8px;
    text-align:center;
`
//text change with typography
const Text=styled(Typography)`
    font-size:16px;
    font-weight:600;
    font-family:inherit;
`

const Navbar = () => {
  return (
     <Box style={{background:'#fff'}}>
        <Component>
        {
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt="nav" style={{width:64}} />
                    < Text>{data.text}</ Text>
                </Container>

            ))
        }
    </Component>
     </Box>
  )
}

export default Navbar
