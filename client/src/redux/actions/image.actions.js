import axios from 'axios'
import { INIT_IMAGE } from '../types'

export const initImage = (place) => ({
  type: INIT_IMAGE,
  payload: place
})

export const initImageFromServer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`http://localhost:3001/api/image`, {id})
    dispatch(initImage(data))
  }
  catch (err) {
    console.log(err)
  }
}
