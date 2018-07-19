import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';

export default class NavBar extends React.Component {
  componentDidMount() {
    $(function() {
      $(window).scroll(function() {
        if ($(window).width() <= 768) {

          if (($(this).scrollTop() < 100) && !($(".navbar").css("background-color", "transparent"))) {
            {
              $(".navbar").css("background-color", "transparent");
            }

          } else {

            $(".navbar").css("background-color", "rgba(46,204,113,1)");

          }
        }

      });
    });

    $(".burger-bar").click(function() {
      event.preventDefault();
      $("ul.nav-items").toggleClass("open", 500);

      $(".navbar").css("background-color", "rgba(46,204,113,1)");
    });
    //smooth scrolling
    $('.smooth-scroll').click(function(event) {

      event.preventDefault();
      var section = $(this).attr("href");

      var scrollVal = $(window).width() >= 768
        ? ($(section).offset().top)
        : ($(section).offset().top) - 58;
      $('html, body').animate({
        scrollTop: scrollVal
      }, 800);
    });
    $('.scroll-header').click(function(event) {
      console.log("")
      $("ul.nav-items").toggleClass("open", 500);
    });

    $(window).resize(function() {
      if ($(window).width() > 768) {
        $(".navbar").css("background-color", "transparent");
        $(".navbar").css("margin-top", "1.125rem");
        $(".navbar").css("margin-left", "2.25rem");
        $(".navbar").css("margin-right", "2.25rem");
      } else {
        $(".navbar").css("margin-top", "0");
        $(".navbar").css("margin-left", "0");
        $(".navbar").css("margin-right", "0");
      }
    });
    $('.image-logo').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  }
  render() {
    return (<div className="navbar nav-custom">
      <a href="#"><img className="image-logo" src="images/go-logo2.png"/></a>

      <FontAwesome className="burger-bar burger-nav" name='bars' size='2x'/>

      <ul className="nav-items">
        <li className="nav-item">
          <a className="smooth-scroll scroll-header" href="#top">
            <p className="nav-text">Home</p>
          </a>
        </li>
        <li className="nav-item">
          <a className="smooth-scroll scroll-header" href="#about">
            <p className="nav-text">About Us</p>
          </a>
        </li>
        <li className="nav-item">
          <a className="smooth-scroll scroll-header" href="#theApp">
            <p className="nav-text">The App</p>
          </a>
        </li>
        <li className="nav-item last-li">
          <a className="smooth-scroll scroll-header" href="#contact">
            <p className="nav-text">Contact Us</p>
          </a>
        </li>
      </ul>

    </div>);
  }
}
