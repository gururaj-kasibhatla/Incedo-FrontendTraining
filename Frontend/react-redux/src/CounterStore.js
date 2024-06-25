import { createStore } from 'redux';
import counterEffect from './CounterEffect'; // Adjust the import path as per your file structure

const counterStore = createStore(counterEffect);

export default counterStore;
