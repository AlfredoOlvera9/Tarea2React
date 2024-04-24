import React from 'react'

function ComponentePadre({children}) {

  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default ComponentePadre