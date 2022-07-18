import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { initImageFromServer } from '../../redux/actions/image.actions'
import './Forecast.css'


export default function Forecast() {
  const [dayForecast, setDayForecast] = useState(new Date().toLocaleString("ru", { weekday: "long" }))
  const { forecast } = useSelector(state => state)
  const { image } = useSelector(state => state)
  const { id } = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initImageFromServer(id))
  }, [])

  const handleClick = (day) => {
    setDayForecast(day)
  }
  const selectDay = forecast.filter(el => el.day === dayForecast)

  return (
    <>
      <div className='a'>
        <div className='weekForecast'>
          {forecast?.map((el, indx) => {
            if (!(el.data.length > 0)) return
            return (
              <>
                <div onClick={() => handleClick(el.day)} className={el.day === dayForecast ? 'activTitle' : 'title'}>
                  {el.day}
                </div>
              </>
            )
          })}
        </div>
        <div className='dayItems'>
          {selectDay[0]?.data.map((item, index) => {
            console.log(item)
            return <Card key={index} data={item} />
          })}
        </div>
      </div>
      <div className='photoForecast'>
        {image?.length > 0 &&
          image.map((el, indx) =>
            <img className="imgSerf" width="300" height="355" alt='' src={el.url}></img>
          )
        }
      </div>

    </>
  )
}
