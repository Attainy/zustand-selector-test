import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0, // 상태 1
  text: '', // 상태 2
  increaseCount: () => set((state) => ({ count: state.count + 1 })), // count 증가
  updateText: (newText) => set({ text: newText }), // text 업데이트
}));

export default useStore;
