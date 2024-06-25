import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store';
import CounterView from './CounterView';
import CounterMinus from './CounterMinus';
import CounterAdd from './CounterAdd';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <CounterMinus></CounterMinus>
        <CounterView></CounterView>
        <CounterAdd></CounterAdd>
      </Provider>
    </div>
  );
}

export default App;
