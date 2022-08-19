import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

constructor(props) {
  super(props)
  this.reusableMethod = this.reusableMethod.bind(this)
}

 reusableMethod(){
    alert("passing method as params")
 }
  render() {
    return (
      <div>
        <ChildComponent callingParentComponent={this.reusableMethod}/>
      </div>
    )
  }
}

export default ParentComponent
