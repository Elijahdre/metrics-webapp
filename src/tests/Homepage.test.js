import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Homepage from '../components/Homepage';

describe('Homepage', () => {
  it('renders correctly', () => {
    const tree = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});