import { useState } from 'react';
import Currency from './Currency';
import Wallet from '../assets/digital-wallet.png';
import coinData from './coinData';

function Currencies() {
  const [inputData, setInputData] = useState('');
  const [filterData, setFilterData] = useState(coinData);

  function handleSubmit(event) {
    event.preventDefault();
    const submitData = coinData.filter((coin) => coin.name === inputData);
    setFilterData(submitData);
    setInputData('');
  }

  function formInput(event) {
    setInputData(event.target.value);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input onChange={formInput} placeholder="Enter your search" value={inputData} />
      </form>
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
        {filterData.map((coin) => (
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
