import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
function Product({id,title,image,price,rating}){
    const [{basket},dispatch]=useStateValue();

    console.log("Heyyy your cart",basket);
const addToBasket=()=>{
dispatch({
    type:"ADD_TO_BASKET",
    item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
    },
});
}

    return(
        <div className='product'>
         <p className='productInfo'>{title}</p>
         <p className='productPrice'>
             <small>₹</small>
             <strong>{price}</strong>
         </p>
         <div className='productRating'>
             {Array(rating).fill().map((_,i)=>(<p key={i}>⭐</p>))}
             
             </div>
         <img className='productImage' src={image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}
export default Product