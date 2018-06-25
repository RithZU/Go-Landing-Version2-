import React from 'react';


const AppImageContainer = (props)=>{
  return(
    <div className="app-content-image-box">
      <img src={props.imgSrc}/>
      <h5>{props.title}</h5>
      <p>{props.subtitle}</p>
    </div>
  );
}
export default AppImageContainer;
