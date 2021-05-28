import React from 'react';
import PropTypes from 'prop-types';

export const AddUrlForm = ({ url, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="url">Url</label>
    <input 
      id="url" 
      placeholder="Add long url here" 
      type="url" value={url} 
      onChange={onChange}
      required
    />
    <button>Get shorten Url</button>
  </form>
);

AddUrlForm.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
