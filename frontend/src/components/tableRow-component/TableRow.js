import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component{ // create table two component to get the conference details into a table
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
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link> 
                </td>  
                
            </tr>
        );
    }
}

export default TableRow;