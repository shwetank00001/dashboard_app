import React from 'react'

const Stacked = ({color, bgColor, borderRadius, text}) => {
  return (
    <div>
            <button 
    style={{color:color, backgroundColor:bgColor, borderRadius:borderRadius }}
    className='p-10'
    >
        {text}
    </button>
    <p>test</p>
    </div>

  )
}

export default Stacked