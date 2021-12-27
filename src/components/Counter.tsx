import React, { useState } from 'react';
import { css } from '@emotion/css';
import { themeAtom } from './App';
import { useAtom } from '../particule';

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div
      className={appStyle}
      style={{
        backgroundColor: theme === 'dark' ? 'green' : 'yellow',
      }}
    >
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input
        onChange={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}
        type="checkbox"
        checked={theme === 'dark' ? true : false}
      />
    </div>
  );
};

const appStyle = css`
  font-family: sans-serif;
  border: 2px solid pink;
`;
