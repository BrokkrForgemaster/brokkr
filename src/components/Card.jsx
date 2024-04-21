import React from 'react';
import { About } from './About';
import { Profile } from './Profile';

export const Card = () => {
    return(
        <div className="card">
        <Profile />
        <About />
        </div>
    );
}