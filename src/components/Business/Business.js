import React from "react";
import  "./Business.css";

class Business extends React.Component{

    render(){
       console.log(this.props.business);
      
        return (<div className="Business">
        <div className="image-container">
        <a href={this.props.business.url} target = {"_blank"}><img src={this.props.business.imageSrc} alt=''/></a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state}{this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.phone}</h3>
            <h3 className="rating">Rating: {this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} Reviews</p>
          </div>
        </div>
      </div>);
    }
}

export default Business;