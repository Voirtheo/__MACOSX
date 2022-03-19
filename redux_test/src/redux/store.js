import { createStore, applyMiddleware,combineReducers } from 'redux'
import countReducer from './reducers/count_reducer'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const allReducer = combineReducers({
    sum:countReducer,
    people:personReducer
})
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)) )