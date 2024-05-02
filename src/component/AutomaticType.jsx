import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Automatictype = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId;

    const updateText = (index) => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        timeoutId = setTimeout(() => updateText(index + 1), speed);
      }
    };

    updateText(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      variants={textVariants}
     
      transition={{
        duration: 0.4,
      }}
    >
      {displayText}
    </motion.div>
  );
};

export default Automatictype;
