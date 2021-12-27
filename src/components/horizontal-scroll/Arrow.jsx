import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({
  children,
  disabled,
  onClick,
  className,
}) => (
  <div className={`${className}-container arrow-container`}>
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`arrow ${className}`}
    >
      {children}
    </button>
  </div>
);

Arrow.defaultProps = {
  disabled: false,
  onClick: null,
};

Arrow.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default Arrow;
