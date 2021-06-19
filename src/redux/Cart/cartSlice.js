import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: true,
    basket: [],
  },
  reducers: {
    addItemToCart(state, { payload }) {
      console.log(state.basket);
      console.log(payload);
      const product = state.basket.find(item => item.id === payload.id);
      if (product) {
        return state;
      } else {
        return {
          ...state,
          basket: [...state.basket, payload.product],
        };
      }
    },
  },
});
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
