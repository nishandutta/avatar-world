import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';

class Avatarlist extends Component{
    render(){
        return (
            <div className="Avatar_style">
        <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="avatar"></img>
        <h2>{this.props.name}</h2>
        <p>{this.props.work}</p>
    </div>
        )
    }
}

export default Avatarlist;