import React, { useEffect, useState } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';
import {useHistory} from 'react-router-dom'
function Subtotal() {
 
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();
    


  return (
      <div className='subtotal'>
        
        <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' />This order contains a gift
                    </small>
                </>
            )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button  onClick={(e)=>{
                    if(user){
                        history.push('/payment')
                    }
                    else{
                        alert("You Have to SignIn")
                        history.push('/login')
                    }}}>Proceed to checkout</button>
                    
    </div>
  )
}

export default Subtotal