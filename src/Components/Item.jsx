import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice';

const Item = ({name, _id, price, status}) => {

    const dispatch = useDispatch();

    const handleAdd = ()=>{
        dispatch(addItem({id: _id}));
    }
    const handleRemove = ()=>{
        dispatch(removeItem({id: _id}));
    }

  return (
    <div className='flex my-4 bg-gray-200 p-2 py-3 md:p-3 rounded-xl w-[80%] md:w-[60%] md:max-w-2xl'>
        <div className='flex items-center mx-2' >
            <img className='mx-4 w-[40%] md:w-[25%] rounded-md' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/k2apmtxdarej6ju4ssu7" alt= {`${name} image`} />
            <div className='flex flex-col flex-wrap'>
                <h1 className='text-lg'>{name[0].toUpperCase()+name.slice(1)}</h1>
                <h3 className={'text-sm ' + (status==='available'?'text-green-500':"text-red-500")}>{"•"+status}</h3>
                <h2 className='text-md'>Cost: {"₹"+price}</h2>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center mr-4'>
            <button className='bg-green-500 rounded-[50%] w-[30px] h-[30px] mb-3' onClick={handleAdd}>+</button>
            <button className='bg-red-500 rounded-[50%] w-[30px] h-[30px]' onClick={handleRemove}>-</button>
        </div>
    </div>
  )
}

export default Item