import React from 'react';
import terpLogo from './image/logoTerp.png'
import './navbar.scss'

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="navbarContainer">
                <a href="/"> <img src={terpLogo} alt="Interpretor Source"/> </a>
                <h3>INTERPRETING SERVICES</h3>
                <a href= "/request">Request Interpreter </a>
                <h3>(904) 687 - 1022</h3>
            </div>
        )
    }
}