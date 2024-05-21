import { createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'

import {composeWithDevTools}from 'redux-devtools-extension'
 import { getProductDetailReducer, getProductsreducer } from './reducers/productreducer'
 import { cartReducer } from './reducers/cartreducer'
const reducer=combineReducers(
    {
        getProducts:getProductsreducer , 
        getProuctDetails:getProductDetailReducer,
        cart:cartReducer
    }
)
const middleware=[thunk];

const store =createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;