import React from 'react'
import NiceLetter from './NiceLetter'

const NiceTitle = ({children, fontSize,colorOnHover,normalColor}) => {
  return (
    <div className='flex font-bold' style={{fontSize, color : normalColor}}>
      {
        children.split("").map(letter => (
          <NiceLetter colorOnHover={colorOnHover}>{letter}</NiceLetter>
        ))
      }
    
    </div>
  )
}

export default NiceTitle