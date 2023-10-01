import React from 'react';

import './menu-item.styles.scss';

const MenuItem = (props) => {
  console.log('props: ', props)
  const { title, imageUrl, size } = props;
  console.log(title, imageUrl, size)
  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        {title && <h1 className='title'>{title.toUpperCase()}</h1>}
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;