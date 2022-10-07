import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Header from '../components/Header';

describe('Header', () => {
  it('render header', () => {
    const snap = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
