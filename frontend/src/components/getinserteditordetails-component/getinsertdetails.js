import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Data1 extends Component{

   
   
    render(){
        return (

        
            
            <tr>
            
                <td>
                    {this.props.obj.research_name}
                </td>
            
                
                <td>
                    {this.props.obj.author_name}
                </td>
                <td>
                    {this.props.obj.research_Type}
                </td>
                <td>
                
                </td>
                
            </tr>
            
        );
    }
}