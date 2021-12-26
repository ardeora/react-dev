import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

const useWindowsWidth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 600);
  console.log('Running useWindowsWidth');
  const checkScreenSize = () => {
    console.log('Running checkScreenSize');
    setIsScreenSmall(window.innerWidth < 600);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isScreenSmall;
};

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const isScreenSmall = useWindowsWidth();

  console.log(`rendering App ${count}`);

  useEffect(() => {
    console.log(`running Effect ${count}`);
    return () => {
      console.log(`cleaning up Effect ${count}`);
    };
  });

  console.log(`isScreenSmall: ${isScreenSmall}`);
  return (
    <div className={appStyle}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <p>Width: {isScreenSmall ? 'true' : 'false'}</p>
    </div>
  );
};

const appStyle = css`
  font-family: sans-serif;
  border: 2px solid pink;
`;
