
import {ADD_ITEM} from '../actions/cart';

const initState = {
    cartItems: []
};

export const reducer = (state = initState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return {...state, cartItems: state.cartItems.push(action.payload)}
        default:
            return state;
    }
}
