import React from 'react';
class HeaderComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            headerText : "Isuue Tracker Applictaion",
            logo : "ITA"
        };
    }


    render(){
        return(
            <div>
               <h1>{this.state.headerText}</h1> 
               <h2>{this.state.logo}</h2>
            </div>
        );
    }
}
export default HeaderComponent;