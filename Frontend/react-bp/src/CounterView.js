import { increment, decrement } from "./Action";
import { connect } from 'react-redux';

var myState = (state) => ({
    count: state.count
});

var myProps = {
};

var CounterView = ({ count }) => {
    return (
        <>
            Counter View: {count}  
        </>
    );
};

export default connect(myState, myProps)(CounterView);
