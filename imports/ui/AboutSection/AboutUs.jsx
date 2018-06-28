import React from 'react';
import AboutContent from './AboutContent';

export default ()=>{
  return(
    <div id="about" className="about-us-section section-container">
      <AboutContent cname="" title="Why we build this platform?" subtitle1="Our vision is to solve the problem using technology" subtitle2="To make life easier than ever" imgSrc="images/about/icon1.png" />
      <br />
      <AboutContent cname=" reverse" title="Football is the future" subtitle1="We will bring technology into football industry" subtitle2="You will never missed your match again" imgSrc="images/about/icon2.png" />
    </div>
  );
}
