import {create} from 'zustand';

type Inventaire = {
  inventaire: any[];
  addToInventaire: (id:number, image: string, name: string, price: number) => void;
};

export const useInventaire = create<Inventaire>((set) => ({
  inventaire: [],

  addToInventaire: (id: number, image: string, name: string, price: number) => 
    set((state) => {
      const find = state.inventaire.find((product) => product.id === id);

      if (find) {
        return {inventaire: state.inventaire.map((product) => {
          if (product.id === id) {
            return {...product, quantity: product.quantity + 1}
          } else {
            return product
          }
        })}
      } else {
        return {inventaire: [...state.inventaire, {id, image, name, price, quantity: 1}]}
      }
    })
}));