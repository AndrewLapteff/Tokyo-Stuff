import { create } from 'zustand';

export const useStore = create((set) => ({
  items: 0,

  addToCart: (number) => set((state) => ({ items: (state.items += 1) })),
  delFromCart: (number) => set((state) => ({ items: (state.items -= 1) })),
}));
