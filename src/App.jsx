import React from 'react';
import FullStateSubscriber from './FullStateSubscriber';
import CountSubscriber from './CountSubscriber';
import Actions from './Actions';
import useStore from './useStore'; // Zustand 스토어 import

const App = () => {
  const states = useStore(); // count 상태 구독
  const setCount = useStore((state) => state.setCount); // setCount 함수 구독

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>state: {JSON.stringify(states)}</h1>
      <button onClick={setCount}>Increment and Replace State</button>
    </div>
    <div>
      <h1>Zustand Selector Test</h1>
      <Actions />
      <FullStateSubscriber />
      <CountSubscriber />
    </div>
    </>
  );
};

export default App;