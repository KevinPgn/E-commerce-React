import {create} from 'zustand';
import shopping from '../data/Shopping';


type Shop = {
  shopping: any[];
  categoryFilter: string;
  priceFilter: string;
  shopLength: number;
  cartOpen: boolean;

  setCategoryFilter: (category: string) => void;
  setPriceFilter: (price: string) => void;
  setShopLength: (length: number) => void;
  toggleCart: () => void;
};

export const useShop = create<Shop>((set) => ({
  shopping: shopping,
  categoryFilter: 'All',
  priceFilter: 'All',
  shopLength: shopping.length,
  cartOpen: false,

  setPriceFilter: (price: string) => set(() => ({ priceFilter: price })),
  setCategoryFilter: (category: string) => set(() => ({ categoryFilter: category })),
  setShopLength: (length: number) => set(() => ({ shopLength: length })),
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
}));
