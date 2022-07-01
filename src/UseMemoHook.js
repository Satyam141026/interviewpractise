import React, { useMemo, useState } from 'react'
import './App.css';

function UseMemoHook() {
    const [count,setCount]=useState(1)
    const [item,setItem]=useState(1000)
   
    //there is problem of this function when count is update is or not the function is all the time called which decrese        the performence of program this is so bed   to overcome this problem we use a useMemo hook  and class component we use pure component
const memohookvar=useMemo( function Numbermultiply(){
    console.warn("function okk")
    return count*11
},[count])



    return (
        <div>
            <h1>Count Value{count}</h1>
            <h1>setItem value{item}</h1>
            <h1>Numbermultiply{ memohookvar}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count increase</button><hr></hr>
            <button onClick={()=>{setItem(item+1)}}>Item increase</button>
        
        </div>
    )
}

export default UseMemoHook
