import { combineReducers } from 'redux'
import FieldReducer from './reducer-field'

const rootReducer = combineReducers({
  field: FieldReducer
})

export default rootReducer
