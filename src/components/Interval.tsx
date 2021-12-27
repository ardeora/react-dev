import React, { useEffect, useState } from 'react';
// import { unstable_batchedUpdates } from 'react-dom';

export const Interval = (): JSX.Element => {
  // const [x, setX] = useState(0);
  const [ticker, setTicker] = useState(0);

  // const handleMouseMove = (event: MouseEvent) => {
  //   unstable_batchedUpdates(() => {
  //     setX(event.clientX);
  //     setY(event.clientY);
  //   });
  // };
  const tick = () => {
    console.log(`Tick: ${ticker}`);
    setTicker((ticker) => ticker + 1);
  };
  // console.log(`Mouse: ${x}, ${y}`);

  useEffect(() => {
    const intervalTicker = setInterval(tick, 1550);
    return () => {
      clearInterval(intervalTicker);
    };
  }, []);

  return (
    <div>
      <p>{ticker}</p>
    </div>
  );
};
