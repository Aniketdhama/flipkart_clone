import axios from 'axios'
 import * as actionTypes from '../constants/productsConstatnt'
  
 const URL='http://localhost:8000'

//we used here thunk function ()=>{}
//async(dispatch) is a middleware function 
export const getProducts=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/products`)
        //console.log(response)
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }
    catch (error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
     }
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_FAIL, payload: error.response});

    }
};
