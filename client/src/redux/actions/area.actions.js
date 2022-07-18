import { INIT_AREA } from "../types";
import axios from 'axios'

export const initArea = (area) => ({
  type: INIT_AREA,
  payload: area
})

export const initAreaFromServer = () => async (dispatch) => {
  try {
    const { data } = await axios(`http://localhost:3001/api`)
    dispatch(initArea(data))
  }
  catch (err) {
    console.log(err)
  }
}
