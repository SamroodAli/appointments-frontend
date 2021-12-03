import React from 'react';
import PropTypes from 'prop-types';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function Card({
  itemId,
  selected,
  onClick,
  name,
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <button
      type="button"
      onClick={() => onClick()}
      style={{
        border: '1px solid',
        display: 'inline-block',
        margin: '0 10px',
        width: '160px',
        userSelect: 'none',
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>{name}</div>
        <div style={{ backgroundColor: visible ? 'transparent' : 'gray' }}>
          visible:
          {' '}
          {JSON.stringify(visible)}
        </div>
        <div>
          selected:
          {' '}
          {JSON.stringify(!!selected)}
        </div>
      </div>
      <div
        style={{
          backgroundColor: selected ? 'green' : 'bisque',
          height: '200px',
        }}
      />
    </button>
  );
}

Card.propTypes = {
  itemId: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
