import React from 'react';
import PropTypes from 'prop-types';
// import { VisibilityContext } from 'react-horizontal-scrolling-menu';

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
      tabIndex={0}
    >
      <img className="teacher-image" src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
      <h3>{item.name}</h3>
      <hr className="teacher-ruler" />
    </button>
  );
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  // itemId: PropTypes.string.isRequired,
  // selected: PropTypes.bool.isRequired,
};
