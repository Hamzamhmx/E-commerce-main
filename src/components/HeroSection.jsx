import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button'
import { HeroSectionStyle } from './componentStyle'


export const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <HeroSectionStyle>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum doloribus repellendus quisquam hic veniam debitis harum assumenda cumque. Assumenda.</p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src='images/hero.jpg' alt="hero-section-photo" className='img-style' />
            </figure>
          </div>
        </div>
      </div>
    </HeroSectionStyle>
  )
}


