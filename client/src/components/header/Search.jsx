

 
import{InputBase,Box,styled, List, ListItem}from '@mui/material'
import Searchicon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import { Link } from 'react-router-dom'
//boxx csss
const StyleBox=styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
     
`
//input basss css
const StyleInput=styled(InputBase)`
    width:100%;
    margin-left:20px;
`
//icon style
const StyleIcon=styled(Box)`
    color:blue;
    padding:5px;
    displau:flex;
`
//
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
 

const Search = () => {
    const[text,setText]=useState('')
    const {products}=useSelector(state=>state.getProducts)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text)
    }
  return (
     <StyleBox>
        <StyleInput
            placeholder='Search for Products,Brands and More'
            onChange={(e)=>getText(e.target.value)}
            value={text}
        />
        <StyleIcon>
            <Searchicon/>
        </StyleIcon>
        {
            text  &&
            <ListWrapper>
                {
                    products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                        <ListItem>
                            <Link to={`/product/${product.id}`} 
                            onClick={() => setText('')}
                            style={{ textDecoration:'none', color:'inherit'}}

                            > 
                            {product.title.longTitle}
                            </Link>
                        </ListItem>
                    ))
                }
            </ListWrapper>
        }
     </StyleBox>
  )
}

export default Search
