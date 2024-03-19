import {create} from 'zustand';

type Inventaire = {
  inventaire: any[];
  addToInventaire: (id:string, image: string, name: string, price: number) => void;
  addMoreQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
};

export const useInventaire = create<Inventaire>((set) => ({
  inventaire: [],

  addToInventaire: (id: string, image: string, name: string, price: number) => 
    set((state) => {
      const find = state.inventaire.find((product) => product.id === id);

      if (find) {
        return {inventaire: state.inventaire.map((product) => {
          if (product.id === id) {
            return {...product, quantity: product.quantity + 1, price: product.price * product.quantity}
          } else {
            return product
          }
        })}
      } else {
        return {inventaire: [...state.inventaire, {id, image, name, price, quantity: 1}]}
      }
    }),

  addMoreQuantity: (id: number) =>
    set((state) => {
      return {inventaire: state.inventaire.map((product) => {
        if (product.id === id) {
          return {...product, quantity: product.quantity + 1, price: product.price + (product.price / product.quantity)}
        } else {
          return product
        }
      })}
    }),

  removeQuantity: (id: number) =>
    set((state) => {
      const find = state.inventaire.find((product) => product.id === id);

      if (find && find.quantity > 1) {
        return {inventaire: state.inventaire.map((product) => {
          if (product.id === id) {
            return {...product, quantity: product.quantity - 1, price: product.price - (product.price / product.quantity)}
          } else {
            return product
          }
        })}
      } else {
        return {inventaire: state.inventaire.filter((product) => product.id !== id)}
      }
    }),
}));