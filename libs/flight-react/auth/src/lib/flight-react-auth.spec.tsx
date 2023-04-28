import { render } from '@testing-library/react';

import FlightReactAuth from './flight-react-auth';

describe('FlightReactAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightReactAuth />);
    expect(baseElement).toBeTruthy();
  });
});
