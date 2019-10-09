
import {ADD_ITEM} from '../actions/cart';

const initState = {
    cartItems: new Set()
};

const reducer = (state = initState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return {...state, cartItems: state.cartItems.add(action.payload)}
        default:
            return state;
    }
}

export default reducer;