import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import { useState, useEffect } from "react";
import {Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initAreaFromServer } from "../../redux/actions/area.actions";
import { initPlaceFromServer } from '../../redux/actions/place.actions';
import style from './MapCart.css'



export default function MapCart({ id }) {
  const idArea = id
  const dispatch = useDispatch()
  const [render, setRender] = useState(false)
  const [idPlace, setIdPlace] = useState('')
  const { area } = useSelector((state) => state)
  const { place } = useSelector((state) => state)


  useEffect(() => {
    dispatch(initAreaFromServer())
    dispatch(initPlaceFromServer(idArea))
  }, [])

  const filterAreaArr = area?.filter((el) => el.id === idArea)
  const areaArr = filterAreaArr?.map((el) => el.coordinate?.split(','))
  const coordinateArea = areaArr[0]?.map(el => Number(el))

  window.setRedirect = function (id) {
    setIdPlace(id)
    setRender(!render)
  }

  return (
    <div id="map">
      <YMaps>
        <Map defaultState={{ center: coordinateArea, zoom: 5, behaviors: ["default", "scrollZoom"] }} width="100%"
          height="500px"
          modules={["geoObject.addon.balloon"]} 
          >
          {place?.map((el) => (
            <Placemark
              key={el.id}
              geometry={[el.coordinate].map(el => el.split(', ')).flat().map(el => Number(el))}
              properties={{
                balloonContentHeader: `${el.name}`,
                balloonContentBody: `<input type="button" onclick="window.setRedirect(${el.id}) "value="Подробнее"/>`
              }}
              options={{
                preset: "islands#violetIcon",
                iconColor: '#00b2df',
              }}
            />
          ))}
          {render && <Navigate to={`/forecast/${idPlace}`} />}
        </Map>
      </YMaps>
    </div >
  )
}

