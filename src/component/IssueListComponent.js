import React from 'react';
import IssueNameComponent from './IssueNameComponent';
import IssueForm from './IssueForm';

class IssueListComponent extends React.Component{

    constructor(props){
        super(props);  
        this.changeStatus=this.changeStatus.bind(this); 
        this.updateIssue=this.updateIssue.bind(this);
        this.addIssue=this.addIssue.bind(this);
        this.deleteIssue=this.deleteIssue.bind(this);
        this.editIssue=this.editIssue.bind(this);
        this.state={
            issues : [
                {name : "Create React App Demo" ,completed : false},
                {name : "Create PPT for React App" ,completed : false},
                {name : "Create a POC on React and Redux App" ,completed : false}
            ],
            currentIssue : ''
        }
    }
    editIssue(index ,newValue){
        //console.log('issueListComp',index,'',newValue);
        let {issues} = this.state;
        let currentIssue = issues[index];
        currentIssue['name'] = newValue;
        this.setState({
            issues //local and golbal varible name is same so no need of issues : issues
        });    
    }

    deleteIssue(issueToBeDeleted){
        console.log("Delete button clicked : " ,issueToBeDeleted);
        let issues = this.state.issues;
        issues.splice(issueToBeDeleted,1);
        this.setState({
            issues : issues
        });
    }
    addIssue(event){
        event.preventDefault();//stooping the natural behaviour of submittion or now it will not reload page
        //console.log("add issue triggered");
        let issues = this.state.issues;
        let currentIssue = this.state.currentIssue;

        issues.push({
            name : currentIssue,
            completed : false
        });
        this.setState({
            issues : issues,
            currentIssue: ''
        });
    }
    updateIssue(newValue){
        this.setState({
            currentIssue : newValue.target.value
        });
    }
    changeStatus (index){
        var issues = this.state.issues;
        var issue = issues[index];
        issue.completed=!issue.completed;
        this.setState({
            issues : issues
        });
        //console.log(this.state.issues[index]);
    }

    render(){
        return(
        <div>
            <h1 className="display-4">Issue Tracker App</h1>
            <hr/>

            <section>
                <IssueForm
                currentIssue ={this.state.currentIssue}
                updateIssue={this.updateIssue}
                addIssue={this.addIssue}
                />
            </section>
            <ul>
                {this.state.issues.map((issue , index) => {
                    return  <IssueNameComponent 
                    key={issue.name} 
                    issue={issue} 
                    index ={index}
                    clickHandler={this.changeStatus}
                    deleteIssue={this.deleteIssue}
                    editIssue ={this.editIssue}
                    />  
                })}
               
            </ul>
        </div>
        );
    }
}
export default IssueListComponent;