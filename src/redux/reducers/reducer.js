
import {ADD_ITEM} from '../actions/cart';

const initState = {
    cartItems: []
};

const reducer = (state = initState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            console.log(state.cartItems)
            return {...state, cartItems: state.cartItems.concat(action.payload)}
        default:
            return state;
    }
}

export default reducer;