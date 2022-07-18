import { INIT_PLACE } from "../types";

export function placeReducer(state = [], action) {
  const { type } = action

  switch(type) {
    case INIT_PLACE: {
      
      return action.payload
    }
    default: {
      return state 
    }
  }
}
