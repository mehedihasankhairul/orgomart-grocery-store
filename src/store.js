import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

import categoryData from "./assets/data/categoryData.json";

const useStore = create(devtools(persist((set) => ({
  cart: [],
  products: categoryData.flatMap((category) => category.items.map((item) => ({ ...item, id: crypto.randomUUID() }))),
  categories: categoryData.map(({ id, name, image }) => ({ id, name, image })),
  addToCart: (product) => set((state) => {
    const cart = [...state.cart]
    const productIndexInCart = state.cart.findIndex((item) => item.id === product.id);
    if (productIndexInCart !== -1) {
      cart[productIndexInCart].quantity += 1;
    } else {
      cart.push(product)
    }
    return { cart }
  }),
}), {
  name: 'app-store',
  storage: createJSONStorage(() => localStorage)
})))

export default useStore;
