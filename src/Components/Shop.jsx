import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item';

const Shop = () => {

    const {id} = useParams();

    const [shop, setShop] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:8000/shop/${id}`)
        .then(res => {
            setShop(res.data);
        });
    }, [])

  return (
    <div className='h-full flex flex-col'>
        {shop?
        <>
            <div className='flex justify-start mt-4 mx-3 items-center w-full md:w-[80%]'>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tl1skj1qruynmikiyhrs" alt={shop.name} className='mx-4 w-40 rounded-md'/>
                <h1 className='text-3xl md:text-5xl'>{shop.name}</h1>
            </div>
            <div className='p-3 my-4 flex flex-col flex-wrap mx-3 justify-start items-center md:flex-row md:justify-around'>
                {
                    shop.menu.map(item => <Item key={item._id} {...item}/>)
                }
            </div>
        </>
        : ""}
    </div>
  )
}

export default Shop