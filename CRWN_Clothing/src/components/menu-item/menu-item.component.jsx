import React from 'react';

import './menu-item.styles.scss';

import {useMatch, useNavigate} from "react-router-dom"

const MenuItem = ({ title, imageUrl, size}) => {
  const navigateto = useNavigate();
  const match = useMatch("/")

  const handleClick = () => {
    
    navigateto(`${match.pathname}shop/${title}`);
  };

  return (
    <div
      className={`${size} menu-item`}
      onClick={handleClick}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;