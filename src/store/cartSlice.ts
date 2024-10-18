import { Pizza } from "../data/menu-items";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CartItem = Pizza & {
  quantity: number;
};

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pizza>) => {
      const matchibngPizza = state.items.find((existingItem) => {
        return existingItem.id == action.payload.id;
      });
      if (!matchibngPizza) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        matchibngPizza.quantity++;
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
