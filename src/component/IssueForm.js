import React from 'react';

const IssueForm = (props) =>{
    return(
    <div>
       <form onSubmit={props.addIssue}>
        <input type="text" 
                value = {props.currentIssue}
                onChange = {props.updateIssue}
                />
        <button type="submit" className="btn btn-success p-1 ml-3">Add Issue</button>        
       </form>
                

    </div>
        
    );
}
export default IssueForm;
