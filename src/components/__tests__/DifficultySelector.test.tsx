import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DifficultySelector from '../DifficultySelector';

describe('DifficultySelector', () => {
  const renderSelector = (difficulty: "easy" | "medium" | "hard", onChange = vi.fn()) =>
    render(<DifficultySelector difficulty={difficulty} onDifficultyChange={onChange} />);

  it('renders all difficulty levels', () => {
    renderSelector("medium");

    expect(screen.getByRole('button', { name: /easy/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /medium/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /hard/i })).toBeInTheDocument();
  });

  it('highlights the selected difficulty', () => {
    renderSelector("hard");

    const hardButton = screen.getByRole('button', { name: /hard/i });
    expect(hardButton.className).toMatch(/bg-red-500/);
    expect(hardButton.className).toMatch(/text-white/);
  });

  it('calls onDifficultyChange when a button is clicked', () => {
    const mockChange = vi.fn();
    renderSelector("easy", mockChange);

    const mediumButton = screen.getByRole('button', { name: /medium/i });
    fireEvent.click(mediumButton);

    expect(mockChange).toHaveBeenCalledWith("medium");
  });
});
