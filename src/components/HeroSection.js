import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (

    
    <div className='hero-container'>
      <video src='https://cdn.videvo.net/videvo_files/video/free/2013-08/small_watermarked/hd0933_preview.webm' autoPlay loop muted />
      <h5>Welcome to Z STREAM ,</h5><br /><br /><br /><br /><br />
      <h5>India's First cloud Gaming Platform.</h5><br /><br /><br />
      <p>Join The Game</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button></div>
        
   
    
    </div>
        
     
  );
}

export default HeroSection;
