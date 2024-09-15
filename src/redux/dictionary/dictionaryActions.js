import { SET_DICTIONARY } from './dictionaryTypes';

export const setDictionary = (dictionaryData) => {
    return {
        type: SET_DICTIONARY ,
        payload: dictionaryData,
    }
}
