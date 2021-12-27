import React from 'react';
import { Counter } from './Counter';
import { Switch } from './Switch';
import { atom } from '../particule';
import { ThemeType } from './Theme';

export const themeAtom = atom<ThemeType>('light');
window.test = themeAtom;

export const App: React.FC = () => {
  return (
    <div style={{ margin: '20px', border: '1px solid purple' }}>
      <Counter />
      <Switch />
    </div>
  );
};
