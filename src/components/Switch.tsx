import React from 'react';
import { css } from '@emotion/css';
import { themeAtom } from './App';
import { useAtom } from '../particule';

export const Switch = (): JSX.Element => {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div className={style}>
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

const style = css`
  margin-top: 20px;
  font-family: sans-serif;
  border: 2px solid sandybrown;
`;
