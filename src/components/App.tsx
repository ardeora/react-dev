import React from 'react';
import { Counter } from './Counter';
import { Switch } from './Switch';
import { atom } from '../particule';
import { ThemeType } from './Theme';
import { Mouse } from './Mouse';
import { Interval } from './Interval';

export const themeAtom = atom<ThemeType>('light');
// window['test'] = themeAtom;

export const App: React.FC = () => {
  return (
    <div style={{ margin: '20px', border: '1px solid purple' }}>
      {/* <Counter />
      <Switch /> */}
      {/* <Mouse /> */}
      <Interval />
    </div>
  );
};
