import React from 'react';
import PropTypes from 'prop-types';
// import { VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function Card({
  // itemId,
  // selected,
  onClick,
  name,
}) {
  // const visibility = React.useContext(VisibilityContext);
  // const visible = visibility.isItemVisible(itemId);

  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="card"
      tabIndex={0}
    >
      <div>
        <div>{name}</div>
      </div>
    </button>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  // itemId: PropTypes.string.isRequired,
  // selected: PropTypes.bool.isRequired,
};
