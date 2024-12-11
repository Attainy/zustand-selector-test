import { create } from 'zustand';

console.log(`create: \n\n${create()}`)

const useStore = create((set, get, getInitialState) => {
  console.log(`set :\n\n${set}`)
  console.log(`get :\n\n${get}`)
  console.log(`init :\n\n${getInitialState}`)

  return {
  count: 0, // 상태 1
  text: '', // 상태 2
  increaseCount: () => set((state) => ({ count: state.count + 1 })), // count 증가
  updateText: (newText) => set({ text: newText }), // text 업데이트
  // 함수로 상태 변경 및 교체
  setCount: () =>
  set((state) => ({ count: state.count + 1 }), true),
}});

export default useStore;