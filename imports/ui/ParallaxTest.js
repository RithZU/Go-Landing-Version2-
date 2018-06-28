import React from 'react';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import Footer from './FooterSection/Footer';


class App extends React.Component {
   render() {
     return (
       <ParallaxProvider init={{
          smoothScrollingDuration: 500,
          smoothScrolling: true,
          forceHeight: false,
          
        }}>
         <Parallax
           data={{
             'data-center-center': 'opacity: 1;',
             'data-bottom-top': 'opacity: 0;'
           }}
         >

         </Parallax>
       </ParallaxProvider>
     );
   }
 }
 export default App;
