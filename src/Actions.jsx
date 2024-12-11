import React from 'react';
import useStore from './useStore';

const Actions = () => {
  const increaseCount = useStore((state) => state.increaseCount); // count 업데이트 액션
  const updateText = useStore((state) => state.updateText); // text 업데이트 액션

  return (
    <div>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={() => updateText('Hello World!')}>Update Text</button>
    </div>
  );
};

export default Actions;