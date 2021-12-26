import React from 'react';
import { css } from '@emotion/css';
import { useTheme } from './Theme';

export const Switch = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={style}>
      <input onChange={toggleTheme} type="checkbox" checked={theme === 'light' ? false : true} />
    </div>
  );
};

const style = css`
  margin-top: 20px;
  font-family: sans-serif;
  border: 2px solid sandybrown;
`;
