import { createStore } from 'redux';
import counterReducer from './Reducer.js'; // Adjust the import path as per your file structure

const Store = createStore(counterReducer);

export default Store;
