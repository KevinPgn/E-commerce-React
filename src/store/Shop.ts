import {create} from 'zustand';
import shopping from '../data/Shopping';


type Shop = {
  shopping: any[];
};

export const useShop = create<Shop>(() => ({
  shopping: shopping,
}));
