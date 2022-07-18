import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { initForecastFromServer } from '../../redux/actions/forecast.actions'
import Forecast from '../Forecast/Forecast'
import './ForecastContainer.css'

export default function ForecastContainer() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { forecast } = useSelector(state => state)

  useEffect(() => {
    dispatch(initForecastFromServer(id))
  }, [])

  return (
    <>
      <div className='spotName'></div>
      <Forecast />
    </>
  )
}
