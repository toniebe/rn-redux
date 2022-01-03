import {createStore, combineReducers, applyMiddleware} from 'redux';
import {transaksiReducer} from './reducer';
import thunk from 'redux-thunk';

const storeState = createStore(transaksiReducer, applyMiddleware(thunk));
export default storeState;
