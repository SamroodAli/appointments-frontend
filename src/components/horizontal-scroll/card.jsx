import React from 'react';
import PropTypes from 'prop-types';
// import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const COLOR_ENUM = [
  '#98BAE7',
  '#D2EBE8',
  '#FFE6BC',
  '#BBBCBE',
  '#FFAFAF',
  '#F2DDC1',
];

export default function Card({
  onClick,
  item,
  // itemId,
  // selected,
}) {
  // const visibility = React.useContext(VisibilityContext);
  // const visible = visibility.isItemVisible(itemId);

  return (
    <button
      type="button"
      onClick={onClick}
      className="card"
      // shuffle background color
      style={{ backgroundColor: COLOR_ENUM[item.index % COLOR_ENUM.length] }}
      tabIndex={0}
    >
      <img className="teacher-image non-draggable" src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
      <h3>{item.name}</h3>
      <hr className="teacher-line" />
    </button>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  // itemId: PropTypes.string.isRequired,
  // selected: PropTypes.bool.isRequired,
};
