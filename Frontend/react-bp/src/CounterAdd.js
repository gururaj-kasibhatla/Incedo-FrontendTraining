import { increment, decrement } from "./Action";
import { connect } from 'react-redux';

var myState = (state) => ({
    count: state.count
});

var myProps = {
    increment,
    decrement
};

var CounterAdd = ({  increment }) => {
    return (
        <>
            <button type='button' onClick={increment}>+</button>
            
        </>
    );
};

export default connect(myState, myProps)(CounterAdd);
