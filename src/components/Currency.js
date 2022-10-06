import { useDispatch } from 'react-redux'; 
import { Link } from "react-router-dom";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { fetchDetails } from '../redux/crypto/crypto';

function Currency ({}) {
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(fetchDetails());
  };

  return(
    <div className='card'>
      <Link to={}>
        <BsFillArrowRightCircleFill className='icon' onClick={fetchData} />
      </Link>
      <div className='image'>
        <img src={} alt={name}></img>
      </div>
      <h2>{}</h2>
    </div>
  );
}

export default Currency;