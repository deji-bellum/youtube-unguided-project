import React from 'react';
import PropTypes from 'prop-types';

function SidebarItem ({icon, label, isActive, onClick}) {
return (
    <div
        onClick={onClick}
        className=''
         ${isActive ? '' : ''}`}>

      <div className = ''>{icon}</div>
      <div className = ''>{label}</div>   
    </div>
);
}

SidebarItem.propTypes= {
    icon: propTypes.node.isRequired,
    label: propTypes.string.isRequired,
    isActive: propTypes.bool,
    onClick: propTypes.func,
};

SidebarItem.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default SidebarItem;