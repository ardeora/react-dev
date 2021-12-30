import React from 'react'
import { css } from '@emotion/css'

export const Child1 = () => {
  return (
    <div className={style}>
      <h1>Hello World</h1>
    </div>
  );
};

const style = css`
  font-family: sans-serif;
  border: 2px solid blue;
  background: rgba(0, 0, 255, 0.1);
`;

