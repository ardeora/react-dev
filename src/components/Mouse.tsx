import React, { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

export const Mouse = (): JSX.Element => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    unstable_batchedUpdates(() => {
      setX(event.clientX);
      setY(event.clientY);
    });
  };

  // console.log(`Mouse: ${x}, ${y}`);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>
        The mouse position is ({x}, {y})
      </p>
    </div>
  );
};
