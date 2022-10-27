import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import chart from '../assets/chart.png';

function CoinDetails(
  {
    marketCap, name, price, rank, link, symbol, maxSupply,
  },
) {
  return (
    <div>
      <div className="sub-menu">
        <img src={chart} alt={name} />
      </div>
      <div>
        <h2 className="sub-menu-heading">Coin Data</h2>
      </div>
      <div className="stats">
        <div className="entry">
          <h2>Name</h2>
          <p>
            {`${name} (${symbol})`}
          </p>
        </div>

        <div className="entry">
          <h2>Rank</h2>
          <p>{rank}</p>

        </div>

        <div className="entry">
          <h2>Price</h2>
          <p>
            $
            {parseFloat(price).toFixed(2)}
          </p>
        </div>

        <div className="entry">
          <h2>Market Cap</h2>
          <p>{parseFloat(marketCap).toFixed()}</p>
        </div>

        <div className="entry">
          <h2>Max supply</h2>
          <p>{maxSupply ? parseFloat(maxSupply).toFixed() : 'No data retrieved'}</p>
        </div>

        <div className="entry">
          <h2>More data</h2>
          <a href={link} rel="noopener noreferrer" target="_blank">
            <BsFillArrowRightCircleFill />
          </a>
        </div>
      </div>
    </div>

  );
}

export default CoinDetails;
