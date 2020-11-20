import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component{
    
    render(){
        

        if((this.props.businesses === undefined)|| (this.props.businesses === 'empty')){
            return <h1>No results found</h1>;
          }else{
            return (<div className="BusinessList">
            {this.props.businesses.map(business => {
                return <Business business = {business} key = {business.id}/>;
            })}</div>);
          }
    }
}

export default BusinessList;