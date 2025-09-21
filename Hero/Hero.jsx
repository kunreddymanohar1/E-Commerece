import React from "react";
import './Hero.css';
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png';
import arrow_icon from '../Assets/Frontend_Assets/arrow.png';
import hero_img from '../Assets/Frontend_Assets/hero_image.png';

function Hero(){
    return(
        <div className="hero">
        <div className="hero-left">
         <h2>NEW ARRIVALS ONLY</h2>
         
         <div className="hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="icon" className="ico" />
         </div>
       <div className="para">
           <p>collections</p>
         
       </div>
       <div className="para1">
           <p>for everyone</p>
      </div>
        
        </div>
        <div className="hero-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="icon" />
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="img" />
        </div>
    
        </div>
    );
}

export default Hero;