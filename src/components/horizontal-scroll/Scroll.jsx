import { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';

import { LeftArrow, RightArrow } from './arrow';
import Card from './card';

import useDrag from './useDrag';

const onWheel = (apiObj, ev) => {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
};

const Scroll = ({ items }) => {
  const {
    dragStart, dragStop, dragMove, dragging,
  } = useDrag();
  const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff; //eslint-disable-line
    }
  });

  const [selected, setSelected] = useState('');
  const handleItemClick = (itemId) => () => {
    if (dragging) {
      return false;
    }
    return setSelected(selected !== itemId ? itemId : '');
  };

  return (
    <>
      <div className="example" style={{ paddingTop: '100px' }}>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id, name }) => (
              <Card
                name={name}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                onClick={handleItemClick(id)}
                selected={id === selected}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
};

Scroll.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default Scroll;
