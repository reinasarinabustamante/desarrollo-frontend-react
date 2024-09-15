import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";
import userReducer from "./access/accessReducer";
import objectReducer from "./form/formReducer";
import dictionaryReducer from './dictionary/dictionaryReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
    user:userReducer,
    object:objectReducer,
    dictionary: dictionaryReducer,
});

export default rootReducer;