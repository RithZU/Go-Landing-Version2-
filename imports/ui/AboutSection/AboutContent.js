import React from 'react';



const AboutContent = (props) =>{
  return(
    <div className={"about-content"+props.cname}>
      <div className="about-content-words">
        <h4 className="about-content-words-title">{props.title}</h4>
        <p className="about-content-words-subtitle">{props.subtitle1}</p>
        <p className="about-content-words-subtitle">{props.subtitle2}</p>
      </div>
      <div className="about-content-image">
        <img className="about-content-image-image" src={props.imgSrc} />
      </div>

    </div>
  );
}
export default AboutContent;
