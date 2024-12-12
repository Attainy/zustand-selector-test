import useStore from './useStore';

const FullSubscriber = () => {
  const { count, text } = useStore(); // 전체 상태 구독
  console.log('FullSubscriber'); // 렌더링 확인 로그

  return (
    <div>
      <h2>Full Subscriber</h2>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
    </div>
  );
};

export default FullSubscriber;
