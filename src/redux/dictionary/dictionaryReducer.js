import { ADICIONAR_PAL_DICCIONARIO,  ELIMINAR_PAL_DICCIONARIO} from './dictionaryTypes';

const initialState = {
   palabras: []
};



const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADICIONAR_PAL_DICCIONARIO : {
            return {
                ...state,
              palabras:[...state.palabras, action.payload]
            }
        }
        case ELIMINAR_PAL_DICCIONARIO : {
            return {
                ...state,
                palabras: state.palabras.filter(pal=>
                    pal.espaniol!==action.payload &&
                    pal.ingles!==action.payload &&
                    pal.portugues!==action.payload
                )
            }
        }

        default:
            return state;
    }
};
export default dictionaryReducer;