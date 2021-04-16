import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import first from '../images/c1.jpg'
import second from '../images/c2.jpg'
import third from '../images/c3.png'
import fourth from '../images/c4.jpg'
import fifth from '../images/c5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Subjects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={first}
              text='Math'
              label='Fun'
              path='/services'
            />
            <CardItem
              src={second}
              text='Calculas'
              label='Fun'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={third}
              text='Physics'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={fourth}
              text='Scince'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={fifth}
              text='Languages'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;