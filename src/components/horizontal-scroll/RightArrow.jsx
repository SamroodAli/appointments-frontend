import { useContext, useState, useEffect } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from './Arrow';

const RightArrow = () => {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible,
  );
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()} className="arrow-right">
      ▷
    </Arrow>
  );
};

export default RightArrow;
