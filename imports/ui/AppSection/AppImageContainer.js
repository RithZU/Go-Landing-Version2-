import React from 'react';


const AppImageContainer = (props)=>{
  return(
    <div className="app-content-image-box">
      <img src={props.imgSrc}/>
      <h5 className="header">{props.title}</h5>
      <p className="sub-header">{props.subtitle}</p>
    </div>
  );
}
export default AppImageContainer;
