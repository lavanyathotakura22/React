import React from 'react'

function ChildComponent(Props) {
  return (
    <div>
      <button onClick={Props.callingParentComponent}>click me</button>
    </div>
  )
}

export default ChildComponent
