import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo1.css';

class Demo1 extends Component{
   render(){
       return <div className="maindiv_style">
        <h1> Hey {this.props.name}</h1>
         <p>hooo</p>
         </div>
   }
}

export default Demo1;