
import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Dataprovider from './context/Dataprovider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detailview from './components/detailsview/Detailview';
import Cart from './components/cart/Cart';
function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
      <Header/>
      <Box fontStyle={{marginTop:54}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Detailview/>}/>
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
       
      </Box>
      </BrowserRouter>
       
    </Dataprovider>
  );
}

export default App;
