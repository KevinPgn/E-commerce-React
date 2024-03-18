import {create} from 'zustand';
import shopping from '../data/Shopping';


type Shop = {
  shopping: any[];
  categoryFilter: string;
  priceFilter: string;

  setCategoryFilter: (category: string) => void;
  setPriceFilter: (price: string) => void;
};

export const useShop = create<Shop>((set) => ({
  shopping: shopping,
  categoryFilter: 'All',
  priceFilter: 'All',

  setPriceFilter: (price: string) => set(() => ({ priceFilter: price })),
  setCategoryFilter: (category: string) => set(() => ({ categoryFilter: category })),
}));
