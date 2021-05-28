import React from 'react';
import PropTypes from 'prop-types';

export const UrlItem = ({ newUrl, longUrl }) => {

  return <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', border: '2px solid red', }}>
    <p style={{ width: '55rem', padding: '2px', display: 'flex', justifyContent: 'space-around', border: '5px solid blue' }}>
      {longUrl}
    
      <a 
        href={newUrl}
      >
        {newUrl}
      </a>
    </p>
  </div>;
  
};

UrlItem.propTypes = {
  newUrl: PropTypes.string.isRequired,
  longUrl: PropTypes.string.isRequired
};
