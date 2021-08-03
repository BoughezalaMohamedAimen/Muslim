import sessionReducer from './auth';
import LanguagesReducer from './languages';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
              sessions:sessionReducer,
              languages:LanguagesReducer
            })

export default  allReducers;