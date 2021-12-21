import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Counter } from './Counter';

export const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <p>Hello</p>
      <Button variant={'outline'} onClick={toggleColorMode}>
        Toggle {colorMode}
      </Button>
      <Counter />
    </>
  );
};
