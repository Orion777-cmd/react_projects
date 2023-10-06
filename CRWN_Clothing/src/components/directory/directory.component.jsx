import React, {useState} from 'react';

import {useSelector } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const  Directory = () => { 
 
    const sections = useSelector(selectDirectorySection);
   
    return (
      <div className='directory-menu'>
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  
}

export default Directory;