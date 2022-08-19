import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value : 20
      }
    }
    
  render() {
    let message
    // if(this.state.value >10){
    //     // return <div>greater than 10</div>
        message = <div>greater than 10</div>
    // }
    // else{
    //     // return <div>less than 10</div>
        message = <div>less than 10</div>
    // }
    return (
        // this.state.value >10 ? <div>greater than 10</div> :<div>less than 10</div>
       {message}
   
    )
  }
}

export default ConditionalRendering
