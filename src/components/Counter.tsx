import React, { useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState({ count: 0 });
  console.log('Counter rendered');

  function startTimer() {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        setCount((oldState) => {
          return { count: oldState.count + 1 };
        });
        setCount((oldState) => {
          return { count: oldState.count + 1 };
        });
      });
    }, 3000);
  }

  return (
    <Box sx={{ outline: '1px solid #45FFB2' }}>
      <Stat>
        <StatLabel color={'teal.200'}>Clicks</StatLabel>
        <StatNumber>{count.count}</StatNumber>
      </Stat>
      <Button color="white" backgroundColor="blue.500" onClick={() => setCount({ count: count.count + 1 })}>
        Increment
      </Button>
      <Button
        ml="2"
        borderColor={'blue.500'}
        borderWidth={'medium'}
        color={'blue.500'}
        variant={'outline'}
        onClick={() => startTimer()}
      >
        Start Timer
      </Button>
    </Box>
  );
};
