import * as actionType from '../constants/productsConstatnt'
//state means current value and action means updated value
//whenever we will dispatch the value it will come in action 
//switch methode is used for differentiate between dispatch value 
export const getProductsreducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case actionType.GET_PRODUCTS_FAIL:
            return {error:action.payload}
            default:
                return state
    }
}

export const getProductDetailReducer=(state={product:{}},action)=>{
    switch ( action.type) {
        case actionType.GET_PRODUCTS_DETAILS_REQUEST:
            return {loading:true}
        case actionType.GET_PRODUCTS_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case actionType.GET_PRODUCTS_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        case actionType.GET_PRODUCTS_DETAILS_RESET:
            return {product:{}}
        
        default:
            return state
         
    }
}