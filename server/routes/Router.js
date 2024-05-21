import express from 'express'
const router= express.Router()
import { usersignup ,userLogin} from '../controllerr/controllerr-api.js';
import { getProducts,getProductById } from '../controllerr/product-controller.js';
import { addPaymentGateway ,paymentResponse} from '../controllerr/payment-controler.js';
router.post('/signup',usersignup)
router.post('/login',userLogin)
//api for fetching the products
router.get('/products',getProducts)
router.get('/product/:id',getProductById)
router.post('/payment',addPaymentGateway)
router.post('/callback', paymentResponse);

export default router;