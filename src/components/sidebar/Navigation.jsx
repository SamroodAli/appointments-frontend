import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ links, isOpen, toggleOpen }) => (
  <motion.ul variants={variants} className={isOpen ? undefined : 'hidden'}>
    {links.map((link, i) => (
      <MenuItem i={i} key={link.to} link={link} toggleOpen={toggleOpen} />
    ))}
  </motion.ul>
);

Navigation.propTypes = {
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,

  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Navigation;
