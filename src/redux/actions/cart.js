export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (payload) =>{
    return {
        type: ADD_ITEM,
        payload: payload
    };
}


export const deleteItem = (set) =>{
    return{
        type: DELETE_ITEM,
        payload: set
    };
}

