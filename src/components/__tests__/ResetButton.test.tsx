import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetButton from '../ResetButton';

describe('ResetButton', () => {
  const mockResetGame = vi.fn();
  const difficulty = 'medium';

  it('renders button with label and icon', () => {
    render(<ResetButton resetGame={mockResetGame} difficulty={difficulty} />);

    const button = screen.getByRole('button', { name: /reset game/i });
    expect(button).toBeInTheDocument();

    const icon = button.querySelector('svg');
    expect(icon).not.toBeNull();
  });

  it('calls resetGame with the correct difficulty on click', () => {
    render(<ResetButton resetGame={mockResetGame} difficulty={difficulty} />);

    const button = screen.getByRole('button', { name: /reset game/i });
    fireEvent.click(button);

    expect(mockResetGame).toHaveBeenCalledWith(difficulty);
  });
});
