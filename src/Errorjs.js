import React, { Component } from 'react'

export default class Errorjs extends Component {
    constructor(){
        super()
        this.state={
            error:false
        }

    }
static getDerivedStateFromError(){
    return {error:true}

}
componentDidCatch(error,errorInfo){
    console.log(error,errorInfo)
}


  render() {
    return (
      <div>
            {
                 this.state.error?<div>oops! this is some error</div>: this.props.children


            }



      </div>
    )
  }
}
