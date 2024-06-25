import { INCREMENT,DECREMENT, MAKEZERO } from "./CounterAction";

var initialState={
    count:0,
    age:10
}

var counterEffect=(state=initialState,action)=>{
    switch(action.type){

        case INCREMENT:
            return{
                ...state,
                count:state.count+1,
                age:state.age+1
            }

        case DECREMENT:
            return{
                ...state,
                count:state.count-1,
                age:state.age-1
            }

        case MAKEZERO:
                return{
                    ...state,
                    count:0
                }

        default:
            return state;

    }

}
export default counterEffect;