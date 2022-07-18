import cloudyDay from '../../img/cloudy-day.svg';
import cloudyNight from '../../img/cloudy-night.svg';
import thunder from '../../img/thunder.svg';
import drizzle from '../../img/drizzle.svg';
import rainy from '../../img/rainy.svg';
import snow from '../../img/snowy.svg';
import clearDay from '../../img/day.svg';
import './Card.css'

export default function Card({ data }) {
  const temp = (data.temp - (273.15))
  const feelTemp = (data.feels_like - (273.15))
  const time = data.time.match(/\d\d\S\d\d/mg, '')
  const speedWind = data.wind.speed

  //  console.log(data);

  let img;
  switch (data.weather.main) {
    case "Clouds":
      img = cloudyNight
      break;

    case "Thunderstorm":
      img = thunder;
      break;

    case "Drizzle":
      img = drizzle;
      break;

    case "Rain":
      img = rainy;
      break;

    case "Snow":
      img = snow;
      break;

    case "Clear":
      img = clearDay;
      break;

    default:
      img = clearDay;
      break;
  }


  return (
    <>
      <div className='weatherMini'>
        <div className='time'>
          {time}
        </div>
        <div className='info'>
          <div className='img'>
            <img src={img} alt="" />
          </div>
          <div className='temp'>
            {Math.round(temp)} °C
          </div>
        </div>
        <div className='weather'>
          <p className='description'>
            Скорость ветра: {speedWind} м/с
          </p>

        </div>
      </div>


    </>
  )
}
