import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCrypto } from '../redux/crypto/crypto';
import Currencies from './Currencies';

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, []);

  return (
    <div>
      <Currencies />
    </div>
  );
}

export default Homepage;
