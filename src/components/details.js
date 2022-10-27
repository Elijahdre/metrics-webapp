import { useSelector } from 'react-redux';
import CoinDetails from './CoinDetails';

function Details() {
  const cryptoDetails = useSelector((state) => state.crypto);

  return cryptoDetails.map((crypto) => (
    <CoinDetails
      key={crypto.id}
      marketCap={crypto.marketCapUsd}
      name={crypto.name}
      price={crypto.priceUsd}
      rank={crypto.rank}
      link={crypto.explorer}
      symbol={crypto.symbol}
      maxSupply={crypto.maxSupply}
    />
  ));
}

export default Details;
