import {combineReducers} from 'redux';
import session from './session'
import places from './places'
import navigationReducer from './navigation'

const rootReducer = combineReducers({
    session,
    navigationReducer,
    places
})

export default rootReducer