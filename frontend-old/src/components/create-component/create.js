import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component{

    constructor(props){
        super(props);
        this.onChangeResearchName=this.onChangeResearchName.bind(this);
        this.onChangeAuthorName=this.onChangeAuthorName.bind(this);
       this.onChangeResearchType = this.onChangeResearchType.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            research_name: '',
            author_name: '',
            research_Type: ''
        }
    }
    onChangeResearchName(e){
        this.setState( {
            research_name: e.target.value
        });
    }
    onChangeAuthorName(e){
        this.setState({
            author_name:e.target.value
        });
    }
    onChangeResearchType(e){
        this.setState({
            research_Type:e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault();
        const obj= {
            research_name : this.state.research_name,
            author_name : this.state.author_name,
            research_Type : this.state.research_Type
        };
        axios.post('http://localhost:5000/conference/add',obj).then(res=>{console.log("Successfull")});
        
        
    }



render(){
    return(
        <div style={{marginTop:10}}>
           <h3>Add Conference details </h3>
             <form onSubmit={this.onsubmit}>
                 <div className="form-group">
                     <label>Add Research Name : </label>
                     <input type="text"
                            className="form-control"
                            value={this.state.research_name}
                            onChange={this.onChangeResearchName} />
                 </div>

                 <div className="form-group">
                     <label>Add Author Name : </label>
                     <input type="text" 
                            className="form-control"
                            value={this.state.author_name}
                            onChange={this.onChangeAuthorName}/>
                 </div>

                 <div className="form-group">
                     <label>Add Research Type : </label>
                     <input type="text" 
                           className="form-control"
                           value={this.state.research_Type}
                            onChange={this.onChangeResearchType}/>
                 </div>

                 <div className="form-group">
                     <input type="submit" value="Register research" className="btn btn-primary"/>
                 </div>
             </form>
         </div>
    )
}


}