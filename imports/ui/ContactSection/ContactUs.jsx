import React from 'react';


export default class ContactUs extends React.Component{
  render()
  {
    return(
      <div id="contact" className="contact-container">
          <div className="contact-content-words">
            <h4>Have some question?</h4>
            <p>Here are our contact information. Feel free to ask us anything</p>
          </div>
          <div className="contact-content-info">
            <div className="contact-content-info-detail">
              <p>Meet with us directly</p>
              <h6>No:8, St:315, Boeng Kak 1,Toul Kork,<br />Phnom Penh Cambodia</h6>
            </div>
            <div className="contact-content-info-detail">
              <p>Give us a call:</p>
              <h6>+855 10 101 010<br />+855 12 123 123</h6>
            </div>
            <div className="contact-content-info-detail">
              <p>Drop us an email:</p>
              <h6>gosoccercambodia@gmail.com</h6>
            </div>


          </div>
          <div id="map"></div>
      </div>
    );
  }
}
