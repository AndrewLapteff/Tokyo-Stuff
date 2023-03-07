import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set, get) => ({
    itemsCount: 0,
    ids: {},

    incrementCartCount: () =>
      set((state) => ({ itemsCount: (state.itemsCount += 1) })),
    decrementCartCount: () =>
      set((state) => ({ itemsCount: (state.itemsCount -= 1) })),

    addId: (id) => {
      const ids = get().ids;

      if (ids[id]) {
        ids[id] += 1;
      } else {
        Object.defineProperty(ids, id, {
          value: 1,
          writable: true,
          configurable: true,
        });
      }

      set({ ids }); //! { }
    },

    deleteId: (targetId) => {
      const ids = get().ids;

      if (ids[targetId] > 0) ids[targetId] -= 1;

      set({ ids });
    },
  }))
);
