import React, { PureComponent } from 'react'
import User from './User';

export default class Purememoclass extends PureComponent {
        constructor(){

            super();
            this.state={
                count:1,
                item:1000
            }
        }
  
        /* const MyComponent = React.memo(function MyComponent(props) {
            /* render using props 
          }); */
     /*     Numbermultiply(){
            console.warn("function okk")
            return this.state.count*11
        }
     */

    render() {
        console.warn("okok");
        <User count={this.state.count} />
        return (
        <div>
      
          <h1>Count Value{this.state.count}</h1>
            <h1>setItem value{this.state.item}</h1>
        {/*     <h1>Parents{this.props.data}</h1> */}

            <button onClick={()=>{this.setState({count:1})}}>Count increase</button><hr></hr>
            <button onClick={()=>{this.setState({item:this.state.item+1})}}>Item increase</button>
            
        </div>
        )
    }
}
