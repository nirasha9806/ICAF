import React, {Component} from 'react';
import axios from 'axios';

export default class AddConferenceDetails extends Component{ // editor add conference details

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
        axios.post('http://localhost:5000/conference/add',obj).then(res=>{alert("Successfull")}); // add the conference details to mongo db
        
        
    }
// get the table structure for add conference details
render(){
    return(
        <div>
        <center>
        <div
     class='form-group w-25'
     className='shadow p-5'
     style={{ width: '45rem' }}
   >     
        <div style={{marginTop:10}}>
          <h3> <center>Add Conference details </center></h3>
          
             <form onSubmit={this.onsubmit}>
                 <div className="form-group">
                 <label>Conference Topic Name : </label>
                     <input type="text"
                            className="form-control"
                            value={this.state.research_name}
                            onChange={this.onChangeResearchName} />
                 </div>

                 <div className="form-group">
                     <label>Author Name : </label>
                     <input type="text" 
                            className="form-control"
                            value={this.state.author_name}
                            onChange={this.onChangeAuthorName}/>
                 </div>

                 <div className="form-group">
                     <label> Conference Type : </label>
                     <input type="text" 
                           className="form-control"
                           value={this.state.research_Type}
                            onChange={this.onChangeResearchType}/>
                 </div>

                 <div className="form-group">
                     <input type="submit" value="Submit" className="btn btn-primary"/>
                 </div>
                
             </form>
         </div>
         </div>
         </center>
</div>
    )
}
}