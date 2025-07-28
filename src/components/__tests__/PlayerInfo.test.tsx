import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlayerInfo from '../PlayerInfo';

describe('PlayerInfo', () => {
  const baseProps = {
    name: 'Player 1',
    correctAnswers: 3,
    timeLeft: 42,
    gameOver: false,
    getTimeClass: () => 'text-black',
    isCountingDown: true,
    align: 'center' as const,
  };

  it('renders player name and correct answer count', () => {
    render(<PlayerInfo {...baseProps} />);
    
    expect(screen.getByText('Player 1')).toBeInTheDocument();
    expect(screen.getByText(/correct: 3/i)).toBeInTheDocument();
  });

  it('displays "Time\'s Up!" when gameOver is true', () => {
    render(<PlayerInfo {...baseProps} gameOver={true} />);
    
    expect(screen.getByText("Time's Up!")).toBeInTheDocument();
  });

  it('displays the countdown when game is not over', () => {
    render(<PlayerInfo {...baseProps} />);
    
    expect(screen.getByText(/42s/)).toBeInTheDocument();
  });

  it('adds animate-spin-slow class when isCountingDown is true', () => {
    const { container } = render(<PlayerInfo {...baseProps} />);
    const hourglass = container.querySelector('svg');

    expect(hourglass?.classList.contains('animate-spin-slow')).toBe(true);
  });

  it('does not add animate-spin-slow when isCountingDown is false', () => {
    const { container } = render(<PlayerInfo {...baseProps} isCountingDown={false} />);
    const hourglass = container.querySelector('svg');

    expect(hourglass?.classList.contains('animate-spin-slow')).toBe(false);
  });
});
