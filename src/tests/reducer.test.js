import store from '../redux/store';
import { fetchCrypto, fetchDetails } from '../redux/crypto/crypto';

describe('crypto reducer', () => {
  it('should fetch crypto', async () => {
    await store.dispatch(fetchCrypto());
    expect(store.getState().crypto.length).toEqual(7);
  });

  it('should fetch crypto details', async () => {
    await store.dispatch(fetchDetails('Bitcoin'));
    expect(store.getState().crypto.length).toEqual(1);
  });
});