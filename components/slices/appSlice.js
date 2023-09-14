import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  totalCheckoutPrice: 0,
  user: {},
  favourites: [],
  carts: [],
  isFirstTime: true,
};

export const appSlice = createSlice({
  name: 'appItems',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        state.carts.push(action.payload);
        state.totalCheckoutPrice = calcuateTotalPrice(state.carts);
      },
      prepare({name, price, quantity, selectQty = 1}) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            quantity,
            selectQty,
          },
        };
      },
    },
    addToFavorite: {
      reducer(state, action) {
        state.favourites.push(action.payload);
      },
      prepare({name, price, quantity, selectQty}) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            quantity,
            selectQty,
          },
        };
      },
    },
    deleteFromFavorite: {
      reducer(state, action) {
        const remFavItems = state.favourites.filter(
          item => item.id !== action.payload,
        );
        state.favourites = [...remFavItems];
      },
    },
    deleteFromCart: {
      reducer(state, action) {
        const remCartItems = state.carts.filter(
          item => item.id !== action.payload,
        );
        state.carts = [...remCartItems];
        state.totalCheckoutPrice = calcuateTotalPrice(state.carts);
      },
    },
    emptyCartItems: {
      reducer(state, action) {
        state.carts = [];
        console.log(state.carts);
        state.totalCheckoutPrice = calcuateTotalPrice(state.carts);
      },
    },

    addUserInfo: {
      reducer(state, action) {
        state.user = action.payload;
      },
    },
    changeIsFirstTime: {
      reducer(state, action) {
        state.isFirstTime = false;
      },
    },
  },
});

export const getCartItemsNumber = state => state.appItems.carts.length;
export const getFavoriteItemsNumber = state => state.appItems.favourites.length;
export const loggedInStatus = state => state.appItems.isLoggedIn;
export const userInfo = state => state.appItems.user;
export const getTotalPrice = state => state.appItems.totalCheckoutPrice;
export const isOnBoard = state => state.appItems.isFirstTime;

export const {
  addToCart,
  addToFavorite,
  deleteFromFavorite,
  deleteFromCart,
  addUserInfo,
  emptyCartItems,
  changeIsFirstTime,
} = appSlice.actions;
export default appSlice.reducer;

//calculte total price
const calcuateTotalPrice = carts => {
  return carts.reduce((total, item) => {
    return total + item.price * item.selectQty;
  }, 0);
};
