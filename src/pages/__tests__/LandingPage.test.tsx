import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../LandingPage';

describe('LandingPage', () => {
  it('renders the heading and description', () => {
    render(<LandingPage />, { wrapper: MemoryRouter });

    expect(screen.getByRole('heading', { name: /memory game/i })).toBeInTheDocument();
    expect(screen.getByText(/select a game mode to start playing/i)).toBeInTheDocument();
  });

  it('renders all three game mode links', () => {
    render(<LandingPage />, { wrapper: MemoryRouter });

    expect(screen.getByRole('link', { name: /multiplayer/i })).toHaveAttribute('href', '/multiplayer');
    expect(screen.getByRole('link', { name: /survival/i })).toHaveAttribute('href', '/survival');
    expect(screen.getByRole('link', { name: /online play/i })).toHaveAttribute('href', '/online');
  });
});
