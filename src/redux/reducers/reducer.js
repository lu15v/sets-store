
import {ADD_ITEM, DELETE_ITEM} from '../actions/cart';

const initState = {
    cartItems: new Set()
};

const reducer = (state = initState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return {...state, cartItems: state.cartItems.add(action.payload)}
        case DELETE_ITEM:
            let copyCartItems = new Set(state.cartItems);
            copyCartItems.delete(action.payload)
            return {...state, cartItems: copyCartItems}
        default:
            return state;
    }
}

export default reducer;