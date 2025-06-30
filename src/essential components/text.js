import React from 'react';
import PropTypes from 'prop-types';

function Text({ children, size, weight, color = 'text-black', className = '' }) {
  // Define text sizes
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  // Define font weights
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const textSize = sizes[size] || sizes.md;
  const fontWeight = weights[weight] || weights.normal;

  return (
    <span className={`${textSize} ${fontWeight} ${color} ${className}`}>
      {children}
    </span>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  weight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold']),
  color: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  size: 'md',
  weight: 'normal',
  color: 'text-black',
  className: '',
};

export default Text;
