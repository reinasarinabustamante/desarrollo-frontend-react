import { SET_OBJECT } from './objectTypes';

export const setObject = (object) => {
    return {
        type: SET_OBJECT,
        payload: object,
    }
}