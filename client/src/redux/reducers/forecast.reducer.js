import { INIT_FORECAST } from "../types";

export function forecastReducer(state = [], action) {
  const { type } = action

  switch (type) {
    case INIT_FORECAST: {
      return action.payload
    } 
    default: {
      return state
    }
  }
}
