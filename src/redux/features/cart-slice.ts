import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imgs?: {
    thumbnails: string[];
  };
};

// Load cart from localStorage if exists
const savedCart = typeof window !== "undefined" 
  ? localStorage.getItem("cartItems") 
  : null;

const initialState: InitialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const updateLocalStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, quantity, discountedPrice, imgs } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, title, price, quantity, discountedPrice, imgs });
      }

      updateLocalStorage(state.items);
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      updateLocalStorage(state.items);
    },

    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
      updateLocalStorage(state.items);
    },

    removeAllItemsFromCart: (state) => {
      state.items = [];
      updateLocalStorage([]);
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
);

export const { 
  addItemToCart, 
  removeItemFromCart, 
  updateCartItemQuantity, 
  removeAllItemsFromCart 
} = cart.actions;

export default cart.reducer;
