import Currency from './Currency';
import Wallet from '../assets/digital-wallet.png';
import coinData from './coinData';

function Currencies() {
  return (
    <main>
      <section className="main-container">
        <img src={Wallet} alt="crypto wallet" />
        <div>
          <h1>
            The World’s Fastest Growing
            <br />
            Crypto App
          </h1>
        </div>
      </section>

      <section className="currency-data">
        {coinData.map((coin) => (
          <Currency
            key={coin.id}
            name={coin.name}
            image={coin.imageUrl}
            fullName={coin.fullName}
          />
        ))}

      </section>
    </main>
  );
}

export default Currencies;
