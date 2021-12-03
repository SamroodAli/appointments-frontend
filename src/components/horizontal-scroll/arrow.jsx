import React from 'react';
import PropTypes from 'prop-types';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Arrow({
  children,
  disabled,
  onClick,
  className,
}) {
  return (
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
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible),
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()} className="arrow-left">
      ◁
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible,
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()} className="arrow-right">
      ▷
    </Arrow>
  );
}

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
