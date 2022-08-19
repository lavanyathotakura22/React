import React, { Component } from 'react'

export class State extends Component {

    constructor(){
        super()
        this.state ={
            DictionaryKey : "Hi How are you",
            Increment : 0,
            Decrement : 0
        }
        }

    handleEvent(){
        this.setState({DictionaryKey: "Thank you for subscribing"})
    }
    increment(){

        this.setState({
            Increment : this.state.Increment +1
        }, ()=> {console.log('call back func',this.state.Increment)})
        // this.state.Increment = this.setState.Increment + 1
        console.log(this.state.Increment)
    }
    decrement(){
        this.setState({
            Decrement : this.state.Decrement - 1
        })
    }
  render() { 
    return (
      <div>
        <h1>{this.state.DictionaryKey}</h1>
        <button onClick={()=> this.handleEvent()}>Click here</button>

        <h1>{this.state.Increment}</h1>
        <button onClick={()=>this.increment()}>+</button>

        <h1>{this.state.Decrement}</h1>
        <button onClick={()=>this.decrement()}>-</button>
      </div>
    )
  }
}

export default State
