import React from 'react';
import { HStack } from '@chakra-ui/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Colors',
};

export const allColors: React.FC = () => {
  return (
    <HStack spacing="8px">
      <div>Yolo</div>
    </HStack>
  );
};
