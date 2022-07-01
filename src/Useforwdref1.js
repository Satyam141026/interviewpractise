import React, { useRef } from 'react'
import Forref from './Forref'

const Useforwdref1 = () => {
    const inputRef=useRef()
    function vCall(){
       
        inputRef.current.value="1000"
    }
      
  return (
    <div>
        <h1>UseForward ref</h1>

        <button onClick={()=>{vCall()}}>Click here</button>
        <Forref ref={inputRef} />

    </div>
  )
}

export default Useforwdref1;