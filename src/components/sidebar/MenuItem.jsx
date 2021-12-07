import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem = ({ i, link }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <Link key={link.to} to={link.to}
      className={location.pathname === link.to ? 'active' : ''}
      onClick={link.onClick}>{link.text}</Link> */}

      <Link
        to={link.to}
        className=" flex justify-center items-center p-4 my-3 rounded-md w-10/12 h-4 flex-1"
        style={style}
        onClick={link.onClick}
      >
        {link.text}
      </Link>
    </motion.li>
  );
};

MenuItem.propTypes = {
  i: PropTypes.number.isRequired,
};

export default MenuItem;
