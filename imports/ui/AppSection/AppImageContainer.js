import React from 'react';


export default class AppImageContainer extends React.Component{
  render(){
    return(
      <div className="app-content-image-box">
        <img src={this.props.imgSrc}/>
        <h5>{this.props.title}</h5>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }


}
