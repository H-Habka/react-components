import React from 'react'

const CustomButton = ({children}) => {
  return (
    <button className='py-2 px-4 hover:bg-blue-600 hover:text-gray-300  bg-blue-800 text-xl font-bold text-white rounded-2xl'>{children}</button>
  )
}

export default CustomButton