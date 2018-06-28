import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';


export default class NavBar extends React.Component{
  componentDidMount() {
    $(function(){
      $(window).scroll(function(){
        if($(window).width()<=768){
          $(".navbar").css("margin", "0");
        if(($(this).scrollTop()<100)&& !($(".navbar").css("background-color","transparent"))){
          {
         $(".navbar").css("background-color","transparent");
       }







        }else{

         $(".navbar").css("background-color", "rgba(46,204,113,1)");



       }
     }


      });
    });




    $(".burger-bar").click(function(){
        event.preventDefault();
        $("ul.nav-items").toggleClass("open",500);
        $(".navbar").css("margin", "0");
        $(".navbar").css("background-color", "rgba(46,204,113,1)");
      });
    //smooth scrolling
    $('.smooth-scroll').click(function(event){



      event.preventDefault();
      var section = $(this).attr("href");
      console.log(section);
      $('html, body').animate({scrollTop :$(section).offset().top}, 800);
    });
    $('.scroll-header').click(function(event){
      console.log("")
      $("ul.nav-items").toggleClass("open",500);
    });


  }
  render()
  {
    return(
       <div className="navbar nav-custom">
          <a href="#"><img className="image-logo" src="images/go-logo2.png" /></a>

             <FontAwesome className="burger-bar burger-nav" name='bars' size='2x' />

          <ul className="nav-items">
             <li className="nav-item"><a className="smooth-scroll scroll-header" href="#top"><p className="nav-text">Home</p></a></li>
            <li className="nav-item"><a className="smooth-scroll scroll-header" href="#about"><p className="nav-text">About Us</p></a></li>
            <li className="nav-item"><a className="smooth-scroll scroll-header" href="#theApp"><p className="nav-text">The App</p></a></li>
            <li className="nav-item last-li"><a className="smooth-scroll scroll-header" href="#contact"><p className="nav-text">Contact Us</p></a></li>
          </ul>

         </div>


    );
  }
}
