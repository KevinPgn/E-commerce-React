import { create } from 'zustand';

type Favory = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

type FavoriesState = {
  favories: Favory[];
  favoryAdd: (item: Favory) => void;
  favoryRemove: (item: Favory) => void;
};

export const useFavories = create<FavoriesState>((set) => ({
  favories: [],
  favoryAdd: (item) =>
    set((state) => {
      const find = state.favories.find((fav) => fav.id === item.id);

      if (find) {
        return { favories: state.favories };
      } else {
        return { favories: [...state.favories, item] };
      }
    }),
  favoryRemove: (item) =>
    set((state) => ({
      favories: state.favories.filter((fav) => fav.id !== item.id),
    })),
}));