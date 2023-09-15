import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  totalCheckoutPrice: 0,
  user: {},
  favourites: [],
  carts: [],
  isFirstTime: true,
  image: 'https://shorturl.at/cJKP5',
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
      prepare({name, price, quantity, selectQty = 1, photo}) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            quantity,
            selectQty,
            photo,
          },
        };
      },
    },
    addToFavorite: {
      reducer(state, action) {
        state.favourites.push(action.payload);
      },
      prepare({name, price, quantity, selectQty, photo}) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            quantity,
            selectQty,
            photo,
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
    addProfileImage: {
      reducer(state, action) {
        state.image = action.payload;
      },
    },
    increaseSelectQty: {
      reducer(state, action) {
        const existingCartItem = state.carts.find(
          x => x.id === action.payload.id,
        );
        const existingFavoriteItem = state.favourites.find(
          x => x.id === action.payload.id,
        );
        if (existingCartItem) {
          existingCartItem.selectQty = action.payload.incr;
        }
        if (existingFavoriteItem) {
          existingFavoriteItem.selectQty = action.payload.incr;
        }
        state.totalCheckoutPrice = calcuateTotalPrice(state.carts);
      },
    },
    decreaseSelectQty: {
      reducer(state, action) {
        const existingCartItem = state.carts.find(
          x => x.id === action.payload.id,
        );
        const existingFavoriteItem = state.favourites.find(
          x => x.id === action.payload.id,
        );
        if (existingCartItem) {
          existingCartItem.selectQty = action.payload.decr;
        }
        if (existingFavoriteItem) {
          existingFavoriteItem.selectQty = action.payload.decr;
        }
        state.totalCheckoutPrice = calcuateTotalPrice(state.carts);
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
export const getProfileImage = state => state.appItems.image;

export const {
  addToCart,
  addToFavorite,
  deleteFromFavorite,
  deleteFromCart,
  addUserInfo,
  emptyCartItems,
  changeIsFirstTime,
  addProfileImage,
  increaseSelectQty,
  decreaseSelectQty,
} = appSlice.actions;
export default appSlice.reducer;

//calculte total price
const calcuateTotalPrice = carts => {
  return carts.reduce((total, item) => {
    return total + item.price * item.selectQty;
  }, 0);
};
