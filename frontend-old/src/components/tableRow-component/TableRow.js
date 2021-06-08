import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component{
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
                <td>
                    <button className="btn btn-primary">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;