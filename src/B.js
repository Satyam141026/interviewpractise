import React from 'react'

const B = () => {
    if(true){
         throw new Error("the error is")
    }
  return (
    <div>B</div>
  )
}

export default B