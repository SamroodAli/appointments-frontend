import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Card from './Card';
import useDrag from './useDrag';

const onWheel = (apiObj, ev) => {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
};

const Scroll = ({ items, onItemClick }) => {
  const {
    dragStart, dragStop, dragMove, dragging,
  } = useDrag();

  const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff; //eslint-disable-line
    }
  });

  // const [selected, setSelected] = useState('');
  const handleItemClick = (item) => () => {
    if (dragging) {
      return false;
    }
    // return setSelected(selected !== itemId ? itemId : '');
    return onItemClick(item);
  };

  return (
    <div onMouseLeave={dragStop} className="horizontal-scroll-container">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
        scrollContainerClassName="scroll-container"
      >
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            onClick={handleItemClick(item)}
            itemId={item.id} // NOTE: itemId is required for track items
          // selected={item.id === selected}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

Scroll.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Scroll;
