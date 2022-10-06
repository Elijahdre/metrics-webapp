import { useDispatch } from 'react-redux'; 
import { useEffect } from "react";

import Currencies from './Currencies';
import { fetchCrypto } from './redux/crypto/crypto';

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, []);

  
  return(
    <div>
      <Currencies />
    </div>
  );
}

export default Homepage;