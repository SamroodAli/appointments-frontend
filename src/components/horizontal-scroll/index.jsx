import PropTypes from 'prop-types';
import Scroll from './Scroll';

const HorizontalScroll = ({ items, onItemClick }) => {
  const mappedIds = items.map((item) => ({
    ...item,
    id: String(item.id),
  }));

  return <Scroll items={mappedIds} onItemClick={onItemClick} />;
};

HorizontalScroll.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
export default HorizontalScroll;
