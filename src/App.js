import React, { Provider } from 'react';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';

import Homepage from './components/Homepage';
import Header from './components/Header';
import CoinDetails from './components/CoinDetails';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
