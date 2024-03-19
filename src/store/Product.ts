import {create} from 'zustand';

export type ProductID = {
  ProductID: string;
  
  setProductID: (ProductID: string) => void;
}



export const useProduct = create<ProductID>((set) => ({
  ProductID: "",

  setProductID: (ProductID: string) => set({ProductID}),
}));