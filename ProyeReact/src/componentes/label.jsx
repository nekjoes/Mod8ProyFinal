import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

/**
 * Primary UI component for user interaction
 */
export const Label = ({ label, ...props }) => {
  
  return (
    <label

      {...props}
    >
      {label}
    </label>
  );
};

Label.propTypes = {

  label: PropTypes.string.isRequired,

};

