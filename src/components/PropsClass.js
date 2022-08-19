import React  from "react";


//props are rendering with in class and functional components
const PropsClass = props => {
    
    return(
    <div>
        <h1>{props.param1} {props.param2}{props.children}</h1>
    </div>
    )
  
}
export default PropsClass