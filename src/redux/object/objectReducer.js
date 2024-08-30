import { SET_OBJECT } from './objectTypes';

const initialState = {
    object: [],
};

const objectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OBJECT : {
            return {
                ...state,
                object: action.payload,
            }
        }
        default:
            return state;
    }
};

export default objetoReducer;