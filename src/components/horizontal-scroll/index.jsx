import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from './arrow';
import Card from './card';

import useDrag from './useDrag';

// NOTE: embrace power of CSS flexbox!
// import "./arrowsOnBottomOrTop.css";
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

const elemPrefix = 'test';
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () => Array(20)
  .fill(0)
  .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj, ev) {
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
}

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const [items] = React.useState(getItems);

  const {
    dragStart, dragStop, dragMove, dragging,
  } = useDrag();
  const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff; //eslint-disable-line
    }
  });

  const [selected, setSelected] = React.useState('');
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
            {items.map(({ id }) => (
              <Card
                title={id}
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
}
export default App;
