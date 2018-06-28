import React from 'react';
import AppImageContainer from './AppImageContainer';

export default () =>{
  return(
    <div id="theApp" className="the-app-container section-container">
      <div className="app-content-words">
        <h4 className="header">Why GoSoccer?</h4>
        <p className="sub-header">We make your booking process much easier</p>
      </div>
      <div className="app-content-box-container">
        <AppImageContainer clName="app-content-image-box" title="Quick" subtitle="Find your favorite fields" imgSrc="images/app/icon_lightning.png" />
        <AppImageContainer clName="app-content-image-box" title="Simple" subtitle="Book your field within minutes" imgSrc="images/app/icon_lightbulb.png" />
        <AppImageContainer clName="app-content-image-box last-box" title="Accessible" subtitle="Support both Android and Apple devices" imgSrc="images/app/icon_world.png" />
      </div>
    </div>
  );
}
