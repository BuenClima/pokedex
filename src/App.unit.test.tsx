import { render, screen } from '@testing-library/react';

import App from './App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders headline', () => {
    render(<App  />);

    screen.debug();

    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});