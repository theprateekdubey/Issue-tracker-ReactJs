import React from 'react';

class IssueNameComponent extends React.Component{
    constructor(props){
        super(props);
        this.renderForm=this.renderForm.bind(this);
        this.renderIssue=this.renderIssue.bind(this);
        this.toggleState=this.toggleState.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
        this.state = {
            isEditing : false
        };
    }
    updateIssue(event){
        event.preventDefault();
        this.props.editIssue(this.props.index,this.input.value);
        this.toggleState();
    }

    toggleState(){
        const {isEditing} = this.state;
        this.setState({
            isEditing:!isEditing
        });
        
    }
    renderForm () {
        return(
            <form onSubmit = {this.updateIssue}> 
                <input 
                type="text" 
                defaultValue={this.props.issue.name}
                ref = {(value) =>{this.input =value;}}
                />
                <button className="btn btn-warning p-1 ml-3">Update</button>        
            </form>
        );
    }
    renderIssue () {
        return(
            <li 
            onClick={() =>{this.props.clickHandler(this.props.index)}}
            className={this.props.issue.completed?'completed':''}>{this.props.issue.name}
                <button onClick={(event) =>{
                    event.stopPropagation();
                    this.props.deleteIssue(this.props.index)}} 
                    className="btn btn-danger m-1 p-1">X</button>

                <button onClick={(event) =>{
                    event.stopPropagation();
                    this.toggleState()}} 
                    className="btn btn-info m-1 p-1">Edit</button>   
            </li>  
        );
    }
    render(){
        const isEditing = this.state.isEditing;
        return(
         <section>  
             {
                 isEditing ? this.renderForm() : this.renderIssue()
             } 
         </section>  
        );
    }
}
export default IssueNameComponent;