import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';

import Homepage from './components/Homepage';
import Header from './components/Header';
import Details from './components/details';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
