import React from 'react'

const Header = () => {
  return (
    <div className='header flex flex-1 items-center justify-start h-14 bg-lime-100'>
        <img src="./vite.svg" alt="logo" />
        <div className='flex justify-center w-screen'>
            <h1 className='text-xl'>Food Lawn</h1>
        </div>
    </div>
  )
}

export default Header