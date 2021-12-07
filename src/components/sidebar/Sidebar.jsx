import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import useDimensions from './useDimensions';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = ({ links }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={isOpen ? 'absolute top-0 bottom-0 left-0 bg-gray-400 w-64 z-20' : undefined}

    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div className={isOpen ? 'background' : 'low-index background'} variants={sidebar}>
        <Navigation items={links} isOpen={isOpen} toggleOpen={toggleOpen} />
      </motion.div>
    </motion.nav>
  );
};

export default Sidebar;
