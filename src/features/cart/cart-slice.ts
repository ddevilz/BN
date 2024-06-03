import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCart } from "../../../types/list-type";
import cogoToast from "cogo-toast";

interface CartState {
  items: ProductCart[];
}

const initialState: CartState = {
  items: loadCartFromStorage(),
};

function loadCartFromStorage(): ProductCart[] {
  const cartItemsJson = localStorage.getItem("cartItems");
  return cartItemsJson ? JSON.parse(cartItemsJson) : [];
}

function saveCartToStorage(items: ProductCart[]) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCart>) => {
      const { id } = action.payload;

      const existingProductIndex = state.items.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex === -1) {
        state.items.push(action.payload);
        saveCartToStorage(state.items);
      } else {
        cogoToast.error("Product is already in the cart", {
          position: "top-center",
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
