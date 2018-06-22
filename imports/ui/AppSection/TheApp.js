import React from 'react';
import AppImageContainer from './AppImageContainer';


export default class TheApp extends React.Component{
  render()
  {
    return(
      <div id="theApp" className="the-app-container">
        <div className="app-content-words">
          <h4>Why GoSoccer?</h4>
          <p>We make your booking process much easier</p>
        </div>
        <div className="app-content-box-container">
          <AppImageContainer title="Quick" subtitle="Find your favorite fields" imgSrc="images/app/icon_lightning.png" />
          <AppImageContainer title="Simple" subtitle="Book your field within minutes" imgSrc="images/app/icon_lightbulb.png" />
          <AppImageContainer title="Accessible" subtitle="Support both Android and Apple devices" imgSrc="images/app/icon_world.png" />
        </div>
      </div>
    );
  }
}
