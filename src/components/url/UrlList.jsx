/* eslint-disable react/prop-types */
import React from 'react';
import { UrlItem } from './UrlItem';


// eslint-disable-next-line react/prop-types
export const UrlList = ({ list }) => {
  const listElement = list.map(link => (
    <li key={link.newUrl}>
      <UrlItem newUrl={link.newUrl} longUrl={link.longUrl} />
    </li>
  ));
  
  return (
    <ul>
      {listElement}    
    </ul>
  );
};

