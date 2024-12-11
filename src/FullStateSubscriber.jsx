import React from 'react';
import useStore from './useStore';

const FullStateSubscriber = () => {
  const store = useStore(); // 전체 상태 구독
  console.log('FullStateSubscriber Rendered'); // 렌더링 확인 로그

  return (
    <div>
      <h2>Full State Subscriber</h2>
      <p>Count: {store.count}</p>
      <p>Text: {store.text}</p>
    </div>
  );
};

export default FullStateSubscriber;
