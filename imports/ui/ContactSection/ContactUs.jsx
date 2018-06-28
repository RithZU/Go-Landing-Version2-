import React from 'react';


export const ContactUs = ()=>{
  return(
    <div id="contact" className="contact-container section-container">
        <div className="contact-content-words">
          <h4 className="header">Have some question?</h4>
          <p className="sub-header">Here are our contact information. Feel free to ask us anything</p>
        </div>
        <div className="contact-content-info">
          <div className="contact-content-info-detail">
            <p className="sub-header">Meet with us directly</p>
            <h6 className="sub-header">No:8, St:315, Boeng Kak 1,Toul Kork,<br />Phnom Penh Cambodia</h6>
          </div>
          <div className="contact-content-info-detail">
            <p className="sub-header">Give us a call:</p>
            <h6 className="sub-header">+855 70 805 090</h6>
          </div>
          <div className="contact-content-info-detail">
            <p className="sub-header">Drop us an email:</p>
            <a href="mailto:support@gosoccer.asia"><h6 className="email-contact sub-header">support@gosoccer.asia</h6></a>
          </div>


        </div>

    </div>
  );
};

export const MapAPI = ()=>{
  return(
      <div id="map"></div>
  );

};
