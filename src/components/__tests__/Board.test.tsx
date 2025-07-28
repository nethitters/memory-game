import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from '../Board';

// Mock card data
const mockCards = [
  { uniqueId: 1, id: 101, matched: false, image: 'img1.png' },
  { uniqueId: 2, id: 102, matched: false, image: 'img2.png' },
  { uniqueId: 3, id: 103, matched: true, image: 'img3.png' },
  { uniqueId: 4, id: 104, matched: false, image: 'img4.png' },
];

describe('Board component', () => {
  it('renders all cards', () => {
    const mockClick = vi.fn();

    render(
      <Board
        cards={mockCards}
        handleCardClick={mockClick}
        flipped={[1]}
        isShuffling={false}
      />
    );

    const cardElements = screen.getAllByTestId('card');
    expect(cardElements).toHaveLength(4);
  });

  it('calls handleCardClick with correct ID when a card is clicked', () => {
    const mockClick = vi.fn();

    render(
      <Board
        cards={mockCards}
        handleCardClick={mockClick}
        flipped={[]}
        isShuffling={false}
      />
    );

    const firstCard = screen.getAllByTestId('card')[0];
    fireEvent.click(firstCard);

    expect(mockClick).toHaveBeenCalledWith(1); // uniqueId of the first card
  });
});
