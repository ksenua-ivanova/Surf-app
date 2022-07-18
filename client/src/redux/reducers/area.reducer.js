import { INIT_AREA } from "../types";

export function areaReducer(state = [], action) {
  const { type } = action

  switch (type) {
    case INIT_AREA: {
      const { payload: area } = action
      return area
    }
    default: {
      return state
    }
  }
}
