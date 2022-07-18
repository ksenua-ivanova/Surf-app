import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const initialState = {
  area: [],
  place: [],
  forecast: [],
  image: []
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
