import Home from '../../img/home-svgrepo-com.svg'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate()

  const handlerClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className='nav'>
        {/* <img className='logoImg' src={Home} alt="" /> */}
        <h2 onClick={handlerClick} className='navTitle'>SurfApp</h2>
      </div>
    </>
  )
}
