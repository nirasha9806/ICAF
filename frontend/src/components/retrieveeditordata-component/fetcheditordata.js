import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default class Data extends Component{


    delete(id){
        axios.post('http://localhost:5000/api/inserteditordetails/delete/'+id)
        .then(response =>{
            alert("successfully deleted")
            //this.componentDidMount();
        })
    }


    constructor(props){

        super(props);
        //this.onChangeresearch_name = this.onChangeresearch_name.bind(this);
        //this.onChangeauthor_name = this.onChangeauthor_name.bind(this);
        //this.onChangeresearch_Type = this.onChangeresearch_Type.bind(this);
        
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            research_name: this.props.obj.research_name,
            author_name: this.props.obj.author_name,
            research_Type: this.props.obj.research_Type
            
        }



    
    }

    //onChangeresearch_name(e){
       // this.setState({
            //card_number:e.this.props.obj.research_name
        //});
    //}

    

    onSubmit(e){ 
      
      
        console.log(e)
            
        const obj = {
           research_name : this.state.research_name,
           author_name : this.state.author_name,
           research_Type : this.state.research_Type 
      };
        console.log(obj)
        axios.post('http://localhost:5000/api/inserteditordetails/add', obj).then(res=>console.log(res.data)); 

        
        
    }

    
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
                <button  onClick={() =>{this.onSubmit(this.props.obj)}} className="btn btn-primary">Approve</button>
                </td>
                
                <td>
                
                <button onClick={() => this.delete(this.props.obj._id)} className="btn btn-danger">Not Approve</button>
                 
                </td>
            </tr>
            
        );
    }

    
}
