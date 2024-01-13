import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(store => store.cart);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      if(cart.items.length)
        axios.post("http://localhost:8000/cart/get", {
          items: cart.items
        },
        {withCredentials: true}).then(res => {
          console.log(res.data.cart);
          setCartItems(res.data.cart)
        })
        .catch(err => console.log(err));
    }, [cart])

  return (
    <div className="bg-gray-200 flex justify-center h-screen w-screen">
        <div className='w-[90%] lg:w-[60%] '>
            {
              cartItems.map(item => {
                return <><>{item.name}</><>{item.price}</></>;
              })
            }
        </div>
        
    </div>
  )
}

export default Cart