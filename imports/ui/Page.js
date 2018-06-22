import React from 'react';
import HomeCover from './HomeSection/HomeCover';
import Problem from './AppSection/TheApp';
import AboutUs from './AboutSection/AboutUs';
import ContactUs from './ContactSection/ContactUs';
import Footer from './FooterSection/Footer';

export default class Page extends React.Component
{

  render()
  {
    return(
      <div className="home-page">
        <HomeCover />
        <AboutUs />
        <Problem />
        <ContactUs />
        <Footer />




      </div>

    );
  }

}
