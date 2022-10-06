import Currency from "./Currency";

function Currencies() {
  return (
    <main>
    <section className="main-container">
      <img src="" alt="display-logo" />
      <div>
        <h1>
          The World’s Fastest Growing <br />
          Crypto App
        </h1>
      </div>
    </section>

    <section className="currency-data">
      <Currency />
    </section>
    </main>
  );
}

export default Currencies;
