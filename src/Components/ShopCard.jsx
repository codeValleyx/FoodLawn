import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ShopCard = ({name, status, _id}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`./${_id}`);
    }

  return (
    <div className='box-border p-5 flex my-2 rounded-xl bg-slate-200 hover:cursor-pointer md:mx-5' onClick={handleClick}>
        <span className='mr-2 w-[60%] md:mr-3 md:w-[100%]'>
            <img  src="https://lh5.googleusercontent.com/p/AF1QipNRwWJW6jZ6leL80XvdOrOoY47XqBGKz_wY2TLT=w260-h175-n-k-no" alt= {`${name}`} />
        </span>
        <span>
            <h1 className='text-lg md:text-xl'>{name.toUpperCase()}</h1>
            •<span className={'text-sm ' +  (status==='Open'?'text-green-600' : 'text-red-600')}>{status}</span>
        </span>
    </div>
  )
}

export default ShopCard