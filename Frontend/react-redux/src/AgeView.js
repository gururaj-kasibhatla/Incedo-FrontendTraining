import { increment, decrement } from "./CounterAction";
import { connect } from 'react-redux';

var myState = (state) => ({
    age:state.age
});

var myProps = {
    increment,
    decrement
};

function AgeView(props) {
    return (
        <>
            Age View: {props.age}
            <button type='button' onClick={props.increment}>+</button>
            
        </>
    );
};

export default connect(myState, myProps)(AgeView);
