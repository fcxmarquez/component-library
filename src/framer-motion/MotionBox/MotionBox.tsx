import { MotionAdvancedProps } from 'framer-motion';
import React from 'react';
import { MotionBoxWrapper } from './MotionBox.styles';

export const MotionBox: React.FC<MotionAdvancedProps> = () => {
  return (
    <MotionBoxWrapper animate={{ scale: 2.5 }} transition={{ duration: 10 }} />
  );
};
