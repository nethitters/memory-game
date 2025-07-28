import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';

describe('Card component', () => {
    const baseProps = {
        uniqueId: 42,
        id: 101,
        matched: false,
        image: '/test-image.png',
        handleCardClick: vi.fn(),
    };

    it('renders both card faces', () => {
    render(<Card {...baseProps} flipped={false} />);
    
    const images = screen.getAllByAltText(/card/i);
    expect(images).toHaveLength(2);

    // Optional: validate which is front/back
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('card-face.png'));
    expect(images[1]).toHaveAttribute('src', '/test-image.png');
    });

    it('calls handleCardClick with uniqueId when clicked', () => {
        const mockClick = vi.fn();
        render(<Card {...baseProps} handleCardClick={mockClick} flipped={false} />);
        
        fireEvent.click(screen.getByTestId('card'));
        expect(mockClick).toHaveBeenCalledWith(baseProps.uniqueId);
    });

    it('applies flipped class when flipped is true', () => {
        const { container } = render(<Card {...baseProps} flipped={true} />);
        
        const inner = container.querySelector('.flip-card-inner');
        expect(inner?.classList.contains('rotate-y-180')).toBe(true);
    });

    it('does not apply flipped class when flipped is false', () => {
        const { container } = render(<Card {...baseProps} flipped={false} />);
        
        const inner = container.querySelector('.flip-card-inner');
        expect(inner?.classList.contains('rotate-y-180')).toBe(false);
    });
});
