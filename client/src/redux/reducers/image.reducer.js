import {INIT_IMAGE} from '../types'

export function imageReducer(state = [], action) {
  const { type } = action

  switch (type) {
    case INIT_IMAGE: {
      return action.payload
    } 
    default: {
      return state
    }
  }
}
