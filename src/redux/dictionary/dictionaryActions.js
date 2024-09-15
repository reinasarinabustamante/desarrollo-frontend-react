import {ADICIONAR_PAL_DICCIONARIO,  ELIMINAR_PAL_DICCIONARIO  } from './dictionaryTypes';

export const adicionarPalabras = (valores) => {
    return {
        type: ADICIONAR_PAL_DICCIONARIO,
        payload: valores,
    }
}

export const eliminarPalabraAction = (palabra) => {
    return {
        type:  ELIMINAR_PAL_DICCIONARIO ,
        payload: palabra,
    }
}