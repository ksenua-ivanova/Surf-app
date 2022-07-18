import { placeReducer } from "./place.reducer";
import { areaReducer } from "./area.reducer";
import { combineReducers } from "redux";
import { forecastReducer } from "./forecast.reducer";
import { imageReducer } from './image.reducer'

export const rootReducer = combineReducers({
  area: areaReducer,
  place: placeReducer,
  forecast: forecastReducer,
  image: imageReducer
})
