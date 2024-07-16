import {  decrement } from "./Action";
import { connect } from 'react-redux';

var myState = (state) => ({
    count: state.count
});

var myProps = {
    decrement
};

var CounterMinus = ({  decrement }) => {
    return (
        <>
            <button type='button' onClick={decrement}>-</button>
            
        </>
    );
};

export default connect(myState, myProps)(CounterMinus);
