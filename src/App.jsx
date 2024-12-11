import React from 'react';
import FullStateSubscriber from './FullStateSubscriber';
import CountSubscriber from './CountSubscriber';
import Actions from './Actions';

const App = () => {
  return (
    <div>
      <h1>Zustand Selector Test</h1>
      <Actions />
      <FullStateSubscriber />
      <CountSubscriber />
    </div>
  );
};

export default App;
