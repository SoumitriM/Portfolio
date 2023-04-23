import React from 'react';
import './skillcard.scss';

export const SkillCard = ({logo, altText}) => {
  return (
    <div className='skillcard-container'>
      <img src={logo} alt={altText} />
    </div>
  )
};
