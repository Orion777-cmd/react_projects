import React, {useState} from 'react';

import {useSelector } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const  Directory = () => { 
 
    const sections = useSelector(selectDirectorySection);
    console.log("############", sections)
    
    return (
      <div className='directory-menu'>
        {sections.map((section) => (
          <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} />
        ))}
      </div>
    );
  
}

export default Directory;