import React from 'react';
import { Stack, Progress } from '@chakra-ui/react';

export const App: React.FC = () => {
  return (
    <div>
      <Stack>
        <Progress isIndeterminate />
      </Stack>
    </div>
  );
};
