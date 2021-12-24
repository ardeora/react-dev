import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
};

export const variants: React.FC = () => {
  return (
    <HStack spacing="8px">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="ghost">Ghost</Button>
    </HStack>
  );
};
