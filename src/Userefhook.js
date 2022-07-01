import React, { useEffect, useRef } from 'react'

function Userefhook() {


    const refInput=useRef()
    
  useEffect(() => {
    refInput.current.style.backgroundColor='red'
  }, [refInput]);
 function fCall(){
   // console.log(refInput.current.style.color:'red');
    refInput.current.style.color='red'
  //  refInput.current.focus();
  refInput.current.value='1000'
 }



  return (
    <>
     <h1> UserName <input type={'text'} ref={refInput}/></h1>
  <button onClick={()=>{fCall()}}> Click Here</button>
    </>
 
  )
}

export default Userefhook