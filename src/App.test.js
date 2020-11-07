import { render } from '@testing-library/react';

import App from './App';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });

  test('App', () => {
    const { getByText } = render(<App />);

    const div = getByText('Hello World!');
    expect(div).toBeTruthy();
  });
});
