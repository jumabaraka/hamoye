import { render } from '@testing-library/react';

import FlightReactUi from './flight-react-ui';

describe('FlightReactUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlightReactUi />);
    expect(baseElement).toBeTruthy();
  });
});
