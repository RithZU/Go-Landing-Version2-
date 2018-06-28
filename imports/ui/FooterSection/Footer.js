import React from 'react';
import FontAwesome from 'react-fontawesome';


const Footer = ()=>{
  return(
    <div className="footer-container section-container">
      <div className="footer-social-container">
        <div className="footer-social">
          <a href="http://facebook.com/GoSoccerCambodia/" target="_blank"><FontAwesome className="social-icon" name='facebook-square' size='3x' /></a>


        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/gosoccercambodia/?hl=en" target="_blank">
            <FontAwesome className="social-icon" name='instagram' size='3x' />
          </a>


        </div>


      </div>
      <div className="footer-navbar">
        <ul className="footer-nav-items">
          <li className="footer-nav-item"><a className="smooth-scroll footer-scroll" href="#top"><p className="footer-nav-text">Home</p></a></li>
          <li className="footer-nav-item"><a className="smooth-scroll footer-scroll" href="#about"><p className="footer-nav-text">About Us</p></a></li>
          <li className="footer-nav-item"><a className="smooth-scroll footer-scroll" href="#theApp"><p className="footer-nav-text">The App</p></a></li>
          <li className="footer-nav-item"><a className="smooth-scroll footer-scroll" href="#contact"><p className="footer-nav-text">Contact Us</p></a></li>
        </ul>
      </div>
      <div className="footer-logo">
        <img className="footer-image-logo" src="images/go-logo2.png" />
      </div>
    </div>
  );
}
export default Footer;
