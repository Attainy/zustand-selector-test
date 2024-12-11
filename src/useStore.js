import { create } from 'zustand';

console.log(`create: \n\n${create()}`)

const useStore = create((setState, getState, getInitialState) => {
  console.log(`set :\n\n${setState}`)
  console.log(`get :\n\n${getState}`)
  console.log(`init :\n\n${getInitialState}`)

  return {
  count: 0, // 상태 1
  text: '', // 상태 2
  increaseCount: () => set((state) => ({ count: state.count + 1 })), // count 증가
  updateText: (newText) => set({ text: newText }), // text 업데이트
}});

export default useStore;
