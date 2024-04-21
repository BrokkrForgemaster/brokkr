import React from 'react';
import { character } from '../data';

export const About = () => { 
  return (
    <div className='about'>
        <h4 className='about-title'>About</h4>
        <p className='about-content'>{character.bio}</p>
    </div>
  )
}
