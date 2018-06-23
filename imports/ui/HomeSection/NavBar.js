import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';


export default class NavBar extends React.Component{
  componentDidMount() {
    $(function(){
      $(window).scroll(function(){
        if($(window).width()<=768){
        if($(this).scrollTop()<50){
        $(".navbar").css("margin-top", "1.125rem");
         $(".navbar").css("background-color","transparent");



        }else{
         $(".navbar").css("margin", "0");
         $(".navbar").css("background-color", "rgba(46,204,113,1)");



       }
     }
      });
    });

    $(".burger-bar").click(function(){
        event.preventDefault();
        $("ul.nav-items").toggleClass("open",500);
      });
    //smooth scrolling
    $('.smooth-scroll').click(function(event){
      event.preventDefault();
      var section = $(this).attr("href");
      console.log(section);
      $('html, body').animate({scrollTop :$(section).offset().top}, 800);
    });


  }
  render()
  {
    return(
       <div className="navbar nav-custom">
          <a href="#"><img className="image-logo" src="images/go-logo2.png" /></a>

             <FontAwesome className="burger-bar burger-nav" name='bars' size='3x' />

          <ul className="nav-items">
             <li className="nav-item"><a className="smooth-scroll" href="#top"><p className="nav-text">Home</p></a></li>
            <li className="nav-item"><a className="smooth-scroll" href="#about"><p className="nav-text">About Us</p></a></li>
            <li className="nav-item"><a className="smooth-scroll" href="#theApp"><p className="nav-text">The App</p></a></li>
            <li className="nav-item"><a className="smooth-scroll" href="#contact"><p className="nav-text">Contact Us</p></a></li>
          </ul>

         </div>


    );
  }
}
