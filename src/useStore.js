import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0, // 상태 1
  text: '', // 상태 2
  price: 0, // 상태 3
  increaseCount: () => set((state) => ({ count: state.count + 1 })), // count 증가
  updateText: (newText) => set({ text: newText }), // text 업데이트
  increasePrice: () => set((state) => ({ price: state.price + 1 })), // price 증가
}));

export default useStore;