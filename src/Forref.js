import React, { forwardRef } from 'react'

const Forref = (props,ref) => {
  return (
    <div>
        <input type={'text'} ref={ref}/>



    </div>
  )
}

export default forwardRef(Forref);