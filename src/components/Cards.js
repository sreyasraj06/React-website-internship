import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  
  return (
    <div className='Cards'>
      <h4>No more Downloads, Installs or Setup</h4>
      <h4>Browse and Play all your favorite Games in less than a minute.</h4><br></br>
      <h2><u> FEATURED</u></h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem 
              src="https://images.unsplash.com/photo-1604112043688-588981772f37?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHNwYWNlc2hpcHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
"             text="Aurora is an Artificial Intelligence based render engine powering the Z Stream which means slow internet won't make you go crazy."
              label='Aurora'
              path='/Games'
          />
          </ul>

        </div>   
      </div>
      <div className='cardo'>
        <h1>We are coming soon </h1><br></br>
        <h1>Stay Tuned</h1>
      </div>
      <div className='card-o' >
      <h2><u>Game Libraries</u></h2>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem 
              src='images/img3.jpeg'
              text="COMING SOON"
              label='The Unknown'
              path='/Games'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem 
              src='images/img6.jpeg'
              text="COMING SOON"
              label='DRAGONS LAIR'
              path='/Games'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem 
              src='images/img2.jpeg'
              text="COMING SOON"
              label='ATACTIC'
              path='/Games'
           />
          </ul>
          </div>
        </div>
        <h1>About us</h1><br></br>
        <h4>Z Stream is a subsidiary of Evoura Technologies, an Artificial Intelligence startup based in India. We proudly presents, Z Streaming Platform.
        You can play any game of your choice in Web Browser itself with Z Stream.</h4><br></br><br></br>
      </div>
    </div>
  );
}

export default Cards;
