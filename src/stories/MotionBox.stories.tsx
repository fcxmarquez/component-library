import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MotionBox } from '../framer-motion/MotionBox/MotionBox';
import { MotionBoxProps } from '../framer-motion/MotionBox/MotionBox.interface';

export default {
  title: 'FramerMotion/MotionBox',
  component: MotionBox,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<MotionBoxProps> = (args) => <MotionBox {...args} />;

export const Default = Template.bind({});
