import { useEffect, Fragment } from "react";
import { Box, styled } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";
import { getProducts } from "../../redux/actions/productAction.jsx";
import Midslide from "./Midslide.jsx";
import Midsection from "./Midsection.jsx";
const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`;

const Home = () => {
  //this getproducts is coming from redux store
  const {products}=useSelector(state=>state.getProducts)
  //console.log(products)
  //this methd is prduct destructuring method
  //const{products}=getProducts;
 // getProducts.products

  //dispatch products
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <Component>
        <Banner />
        <Midslide products={products} title='Deal of the day'timer={true} />
        <Midsection/>
        <Slide products={products} title='Discounts for you'timer={false} />
        <Slide products={products} title='Suggestion items'timer={ false} />
        <Slide products={products} title='Top Selections' timer={ false}/>
        <Slide products={products} title='Recommended items'timer={ false}/>
        <Slide products={products} title='trending offer 'timer={ false} />
        <Slide products={products} title='Top Deals on Accessories'timer={ false}/>

      </Component>
      
    </Fragment>
  );
};

export default Home;
