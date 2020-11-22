import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Subscribe OUR NEWS LETTER</p>
        <p className='footer-subscription-text'>Be the first to know about new games, exclusive previews & special promotions</p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h5>About </h5><br />
            <div className= "linko">
            © 2020 | All rights reserved<br />
            Z Stream,<br />Evoura Technologies Pvt Ltd,<br />Palakkad, Kerala, India<br />
          </div>
        </div>
          <div class='footer-link-items' >
            <h5>Contact </h5><br />
            <div className= "linko">
            iEDC, NSS College Of Engineering,<br />Palakkad, Kerala,<br />India, 678008<br />E-Mail: contact@zstream.in<br />Tel: +919446033872<br />
            </div>
          </div>

      </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Z STREAM
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Z STREAM © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to= {{pathname: "https://www.facebook.com/zstreamofficial" }}
              target='_blank'
              aria-label='Facebook'
              
            >
            <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{pathname: "https://www.instagram.com/zstreamofficial/" }}
              target='_blank'
              aria-label='Instagram'
            >
            <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
            <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
            <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
            <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

export default Footer;