import { increment, decrement } from "./CounterAction";
import { connect } from 'react-redux';

var myState = (state) => ({
    count: state.count,
    age:state.age
});

var myProps = {
    increment,
    decrement
};

var Counter = ({ count,age, increment, decrement }) => {
    return (
        <>
          <button type='button' onClick={decrement}>-</button>
            Counter View: {count}
            <button type='button' onClick={increment}>+</button>
            
        </>
    );
};

export default connect(myState, myProps)(Counter);
