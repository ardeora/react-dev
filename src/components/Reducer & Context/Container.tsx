import React from 'react';
import { css } from '@emotion/css';
import { Child1 } from './Child1';

export const Container = () => {
  return (
    <div className={style}>
      <Child1 />
    </div>
  );
};

const style = css`
  font-family: sans-serif;
  margin: 20px;
  outline: 2px solid pink;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;
