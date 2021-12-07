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

const Navigation = ({ items }) => (
  <motion.ul variants={variants}>
    {items.map((link, i) => (
      <MenuItem i={i} key={link.to} link={link} />
    ))}
  </motion.ul>
);

Navigation.propTypes = {
};

export default Navigation;
