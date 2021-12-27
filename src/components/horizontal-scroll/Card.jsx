import React from 'react';
import PropTypes from 'prop-types';

const COLOR_ENUM = [
  'indigo',
  'red',
  'green',
  'purple',
  'pink',
  'blue',
];

export default function Card({
  onClick,
  item,
}) {
  const color = COLOR_ENUM[item.index % COLOR_ENUM.length];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`z-0 mb-16 bg-${color}-300 lg:mx-12 h-44 lg:h-56 w-9/12 lg:w-8/12 rounded-3xl mt-20`}
      // shuffle background color
      tabIndex={0}
    >
      <div className=" w-36 lg:w-52 m-16 lg:m-10 bg-red-100 relative bottom-20 left-8 lg:left-20 rounded-full">
        <img className="non-draggable h-36 lg:h-52 rounded-full relative right-16 lg:right-24 bottom-6 lg:bottom-8 mx-auto filter drop-shadow-2xl" src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
      </div>
      <h5 className="text-center mt-3 relative bottom-48 lg:bottom-52 left-20 lg:left-36 font-mono">{item.name}</h5>
      <p className="text-center relative bottom-44 lg:bottom-36 white">Software engineer at Linkedin</p>
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
};
