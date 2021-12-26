import React from 'react';
import { Counter } from './Counter';
import { Switch } from './Switch';

export const App: React.FC = () => {
  return (
    <div>
      <Counter />
      <Switch />
    </div>
  );
};
