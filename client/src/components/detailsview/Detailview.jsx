 
import { useEffect } from "react"
import{useDispatch,useSelector} from 'react-redux'
import{useParams} from 'react-router-dom'
import { getProductDetails } from "../../redux/actions/productAction"
import{Box,styled ,Grid} from '@mui/material'
import Actionview from "./Actionview"
import Productdetails from "./Productdetails"
//css on first box
const Component=styled(Box)`
 background:#F2F2F2;
 margin-top:55px
`
//parent css
const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}))
//right conatiner
const Rightcontainer=styled(Grid)`
 margin-top:50px;
 
`



const Detailview = () => {
 
const dispatch=useDispatch();
const{ id }=useParams();
//for fetching the data from redux store 
//getproductsdeayls is comin from redux
const { loading,product } = useSelector(state => state.getProuctDetails);

useEffect(() => {
  if(product && id !== product.id)   
      dispatch(getProductDetails(id));
}, [dispatch, product, id,loading]);


  return (
     <Component>
      {
         product && Object.keys(product).length &&
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <Actionview product={product}/>
            </Grid>
            <Rightcontainer item lg={8} md={8} sm={8} xs={12}>
               
              <Productdetails product={product} />
            </Rightcontainer>
          </Container>
      }
     </Component>
  )
}

export default Detailview
