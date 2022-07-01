import React, { useEffect } from 'react'
import ChildToProp from './ChildToProp'

const App = () => {
  function childToParentsSendData(name){
    console.log("hello",name)
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      return res.json()})
    .then((data)=>{
      console.log(data)
    })
    .catch(()=>{})
    document.write("hello")
  },[])
  return (
    <div>

      <ChildToProp data={childToParentsSendData}/>
    </div>
  )
}

export default App