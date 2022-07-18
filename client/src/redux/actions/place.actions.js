import { INIT_PLACE } from "../types";
import axios from 'axios'

export const initPlace = (place) => ({
  type: INIT_PLACE,
  payload: place
})

export const initPlaceFromServer = (id) => async (dispatch) => {
  // console.log(id);
  try {
    const { data } = await axios.post(`http://localhost:3001/api/place`, {id})
    dispatch(initPlace(data))
  }
  catch (err) {
    console.log(err)
  }
}

