import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { fetchDetails } from '../redux/crypto/crypto';

function Currency({ name, image, fullName }) {
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(fetchDetails(name));
  };

  return (
    <div className="card">
      <Link to={`/details/:${name}`}>
        <BsFillArrowRightCircleFill className="icon" onClick={fetchData} />
      </Link>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <h2>{fullName}</h2>
    </div>
  );
}

export default Currency;
