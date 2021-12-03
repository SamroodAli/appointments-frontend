import PropTypes from 'prop-types';
import Scroll from './Scroll';

const HorizontalScroll = ({ items }) => {
  const mappedIds = items.map((item) => ({
    ...item,
    id: String(item.id),
  }));

  return <Scroll items={mappedIds} />;
};

HorizontalScroll.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
export default HorizontalScroll;
