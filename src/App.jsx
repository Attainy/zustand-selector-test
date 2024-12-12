import FullSubscriber from './FullSubscriber';
import CountSubscriber from './CountSubscriber';
import useStore from './useStore'; // Zustand 스토어 import

const App = () => {
  const increaseCount = useStore((state) => state.increaseCount); // count 업데이트 액션
  const updateText = useStore((state) => state.updateText); // text 업데이트 액션
  // 코드 추가
  const increasePrice = useStore((state) => state.increasePrice); // count 업데이트 액션

  return (
    <div style={{padding: "50px"}}>
      <h1>Zustand Selector Test</h1>
      <div>
          <button onClick={increaseCount}>Increase Count</button>
          <button onClick={() => updateText('Hello World!')}>Update Text</button>
          {/* 코드 추가 */}
          <button onClick={increasePrice}>Increase Price</button>
      </div>
      <FullSubscriber />
      <CountSubscriber />
    </div>
  );
};

export default App;