import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import React,{Component} from 'react';
import PropsClass from './components/PropsClass';
import ClassComponent from './components/ClassComponent';
import State from './components/State';
import ParentComponent from './components/ParentComponent'

class App extends React.Component{
   
   render(){
      return(
         <div>

         <ConditionalRendering/>

         </div>

      );
   }
}

// printing list of data

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {data:  [{'name':'lavanya'},
//                           {'name':'mounica'},
//                           {'name': 'anusha'}]
//      }
//   }
//   // return the list of data from the list class
//   render() {  
//     return (
//        <div> 
//           <ul>  
//             {this.state.data.map((item) => <List data = {item}/>)}       
//           </ul>  
//        </div>  
//     );  

// }
// }
// class List extends React.Component {  
//    render() { 
//     debugger; 
//       return (  
//          <ul>            
//             <li>{this.props.data.name}</li>   
//          </ul>  
//       );  
//    }  
// }  
export default App;  


