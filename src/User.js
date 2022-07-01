import React, { PureComponent} from 'react'
export default class User extends PureComponent{
  render() {
    console.log("props")
    return (
      <div>
      <h1> User Componet{this.props.count}</h1>
      </div> 
    )
  }
}
