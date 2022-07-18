import axios from 'axios'
import { INIT_FORECAST } from '../types'

export const initForecast = (forecast) => ({
  type: INIT_FORECAST,
  payload: forecast
})

export const initForecastFromServer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`http://localhost:3001/api/forecast`, { id })

    // console.log(data.list)

    const findDay = (day, dayName) => {
      let date = new Date(day.dt_txt).toLocaleString("ru", { weekday: "long" });
      return (date == dayName);
    }

    const createArr = (arr) => {
      return (
        arr.map((elem => {
          let time = new Date(elem.dt_txt).toLocaleString("ru", {
            month: "long",
            day: "numeric",
            // weekday: "long", 
            hour: "numeric",
            minute: "numeric"
          });
          return {
            time,
            temp: elem.main.temp,
            feels_like: elem.main.feels_like,
            weather: elem.weather[0],
            wind: elem.wind,
          }
        })
        )
      )
    }

    const day1 = new Date().toLocaleString("ru", { weekday: "long" })
    const day2 = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString("ru", { weekday: "long" })
    const day3 = new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleString("ru", { weekday: "long" })
    const day4 = new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleString("ru", { weekday: "long" })
    const day5 = new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleString("ru", { weekday: "long" })
    const day6 = new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleString("ru", { weekday: "long" })
    const day7 = new Date(new Date().setDate(new Date().getDate() + 6)).toLocaleString("ru", { weekday: "long" })

    const week = [
      { day: day1, data: createArr(data.list.filter((day) => findDay(day, day1))) },
      { day: day2, data: createArr(data.list.filter((day) => findDay(day, day2))) },
      { day: day3, data: createArr(data.list.filter((day) => findDay(day, day3))) },
      { day: day4, data: createArr(data.list.filter((day) => findDay(day, day4))) },
      { day: day5, data: createArr(data.list.filter((day) => findDay(day, day5))) },
      { day: day6, data: createArr(data.list.filter((day) => findDay(day, day6))) },
      { day: day7, data: createArr(data.list.filter((day) => findDay(day, day7))) },
    ]



    dispatch(initForecast(week))
  } catch (err) {
    console.log(err)
  }
}





