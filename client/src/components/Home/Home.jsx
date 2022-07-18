import { useState, useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from 'react-redux'
import { initAreaFromServer } from "../../redux/actions/area.actions";
import MapCart from "../Map/MapCart";
import Slider from "../Slider/Slider";
import './Home.css'


export default function Home() {
  const [cart, setCart] = useState(false)
  const [id, setId] = useState('')
  const { area } = useSelector((state) => state)
  const dispatch = useDispatch()
  // console.log(area)

  useEffect(() => {
    dispatch(initAreaFromServer())
  }, [])

  function handleClick(id) {
    setCart(!cart)
    setId(id)
  }


  return (
    <>
    <Slider/>
      <div>
        <ul className="list4a">
          {area.map(el => (
            <li onClick={() => handleClick(el.id)} key={el.id}>
              {el.name}
            </li>
          ))}
        </ul>
        <div className="mapArea">
          {cart && <MapCart id={id} />}
        </div>
      </div>

    </>
  )
}
