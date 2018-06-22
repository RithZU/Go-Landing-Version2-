import React from 'react';


export default class AboutContent extends React.Component{
  render()
  {
    return(
      <div className={"about-content"+this.props.cname}>
        <div className="about-content-words">
          <h4 className="about-content-words-title">{this.props.title}</h4>
          <p className="about-content-words-subtitle">{this.props.subtitle1}</p>
          <p className="about-content-words-subtitle">{this.props.subtitle2}</p>
        </div>
        <div className="about-content-image">
          <img className="about-content-image-image" src={this.props.imgSrc} />
        </div>

      </div>
    );
  }
}
