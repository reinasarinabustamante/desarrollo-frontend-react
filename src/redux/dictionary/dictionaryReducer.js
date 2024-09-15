import { SET_DICTIONARY } from './dictionaryTypes';

const initialState = {
    dictionaryData: {
        agregarPalabra: { isEnabled: true },
        eliminarPalabra: { isEnabled: true },
        traducir: { isEnabled: true },
    },
    
};



const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DICTIONARY : {
            return {
                ...state,
                dictionaryData: {
                    ...state.dictionaryData,
                    ...action.payload,
                }
            }
        }
        default:
            return state;
    }
};

export default dictionaryReducer;