import React from 'react';
import HomeContent from './HomeContent';
import NavBar from './NavBar';
import Downloads from './Downloads';
import {Animated} from "react-animated-css";
import $ from 'jquery';


export default class HomeCover extends React.Component {
  componentDidMount() {
  //   if($(window).width()>=769){
  //   $(function(){
  //     var documentEl = $(document), parallaxBg = $("div.home-cover");
  //     documentEl.on('scroll',function(){
  //       var currentScrollPos = documentEl.scrollTop();
  //       console.log(currentScrollPos);
  //       parallaxBg.css('background-position','center '+((-currentScrollPos*0.7))+'px');
  //     });
  //   });
  // }

  }
  render(){
    return(
      <div className="home-cover" id="top">
        <NavBar />
        <HomeContent />
        <Downloads />


      </div>
    );
  }
}
