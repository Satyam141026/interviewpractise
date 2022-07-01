import React from 'react'

const ChildToProp = (props) => {
    const obj={
name:'sharma',
lname:'saty'

    }
  return (
    <div>ChildToProp 



        <button onClick={()=>props.data(obj)}>Click Here</button>
    </div>
  )
}

export default ChildToProp