import React, { useState } from 'react';
import { useTheme } from './Theme';
import { css } from '@emotion/css';

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

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
      <input onChange={toggleTheme} type="checkbox" checked={theme === 'light' ? false : true} />
    </div>
  );
};

const appStyle = css`
  font-family: sans-serif;
  border: 2px solid pink;
`;
