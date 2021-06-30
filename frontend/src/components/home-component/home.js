import React, {Component} from 'react';
import '../../assets/style.css';

export default class Home extends Component{
    signup (){
        window.location='/signup'
    }

    render(){
        return(
            <div>
                <div id="main">
            <div id="box1"></div>
            <div id="box2">
                <div id="text">
                    Conference <br/>Management
                </div>
            </div>
            <div id="box3">
                <div id="container">                    
                    <div id="menu">
                        <ul>
                            <li>HOME</li>
                            <li>SERVICE</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                            <li><button onClick={()=>this.signup()}>Sign Up</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </div>
        );
    }
}