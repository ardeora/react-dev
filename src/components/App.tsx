import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

// So looks like the component renders first, then the previous effect cleanup, then the next effect
export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log(`rendering App ${count}`);

  useEffect(() => {
    console.log(`running Effect ${count}`);
    return () => {
      console.log(`cleaning up Effect ${count}`);
    };
  });

  return (
    <div className={appStyle}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

const appStyle = css`
  font-family: sans-serif;
  border: 2px solid pink;
`;
