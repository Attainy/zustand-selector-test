import React from 'react';
import useStore from './useStore';

const CountSubscriber = () => {
  const count = useStore((state) => state.count); // count 구독
  // 코드 추가
  const price = useStore((state) => state.price); // price 구독
  console.log('CountSubscriber'); // 렌더링 확인 로그

  return (
    <div>
      <h2>Count Subscriber</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default CountSubscriber;
