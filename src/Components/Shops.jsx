import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShopCard from './ShopCard';

const Shops = () => {
    const [shops, setShops] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/shop").then(res => {
            setShops(res.data)
        }).catch(err => {
            console.log(err);
        });
    }, [])

  return (
    <div className='flex flex-col lg:flex-row items-center flex-wrap w-full bg-[#d1d1d1] lg:items-start h-screen'>
        
        {
            shops.map((shop) => {
                return <ShopCard key= {shop._id} {...shop} />
            })
        }

    </div>
  )
}

export default Shops