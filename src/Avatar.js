import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import Avatarlist from './Avatarlist';

class Avatar extends Component{
    
    constructor(){
        super();
        this.state = {
            name : "Welcome to Earth"
        }
    }
    
    namechange(){
        this.setState({
            name : "Congrutulation!!! You are a  citizen now!!!"
        })
    }

    render(){
   
    const avatarray = [
        {
            id:1,
            name:"Jane",
            work:"Activist"
        },
        {
            id:2,
            name:"Chloe",
            work:"Influencer"
        },
        {
            id:3,
            name:"Glace",
            work:"WebDev"
        },
        {
            id:4,
            name:"Harry",
            work:"Spy"
        },
        {
            id:5,
            name:"Stone",
            work:"Detective"
        }
    ]

    const avatararrcard = avatarray.map( (avatarcard, i) => {
        return   <Avatarlist key={i} id={avatarray[i].id} name={avatarray[i].name} work={avatarray[i].work}/>

    })

    return (
    <div className="mainpage">
    <h1>{this.state.name}</h1>
      {avatararrcard}
    <button onClick= { () => this.namechange()}>Citizens</button>
    </div>
    )
    }
}

export default Avatar;