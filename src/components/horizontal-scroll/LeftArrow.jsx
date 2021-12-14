import { useContext, useState, useEffect } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from './Arrow';

const LeftArrow = () => {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible),
  );
  useEffect(() => {
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
};

export default LeftArrow;
