import React, { useState } from 'react'

const Todos = () => {
   const [data,setData]=useState(null)
function addData(e){
    const abcd=document.querySelector('#a1')
   const a=document.createElement('div')
    a.setAttribute('className','ram')
    a.innerHTML=data
    abcd.appendChild(a)
    a.style.backgroundColor='white'
    a.style.margin='3px';

}


  return (
    <div id='a1'>
        <h1>Add    Todo</h1>
        <input onChange={(e)=>setData(e.target.value)} type={'text'}/>   <button onClick={(e)=>{addData(e)}}>Add Todo</button>
    </div>
  )
}

export default Todos








