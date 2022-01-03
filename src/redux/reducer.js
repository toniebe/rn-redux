import {GET_TRANSAKSI} from './action';

const initialState = {
  transaksi: [],
};

export const transaksiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSAKSI:
      return {...state, transaksi: action.payload};
    default:
      return state;
  }
};
