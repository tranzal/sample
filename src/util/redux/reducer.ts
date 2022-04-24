import { combineReducers } from 'redux'

import tokenReducer from './reducers/token'


const rootReducer = combineReducers({
    token : tokenReducer
});
export default rootReducer;

