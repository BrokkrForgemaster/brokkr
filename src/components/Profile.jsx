import React from 'react';
import { CTA } from './CTA';
import { character, organization } from '../data';
import banner from '../assets/images/banner2.png';

export const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile-img'>
            <img src={banner} alt='profile' />
        </div>
        <div className="profile-info">
        <h1 className='org-name'>{organization.name}</h1>
        <p className='profile-name'>{character.name}</p>
        <p className='profile-role'>{character.role}</p> 
        <p className='profile-web'>
          <a href={organization.web} target='_blank' rel='noreferrer'>
            {organization.web}
          </a>
        </p>
        </div>
        <CTA />
    </div>
  )
}