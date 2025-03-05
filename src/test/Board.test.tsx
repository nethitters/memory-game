import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Board from "../components/Board";

describe("Board Component", () => {
  const mockCards = [
    { uniqueId: 1, id: 1, matched: false, image: "/images/card1.png" },
    { uniqueId: 2, id: 1, matched: false, image: "/images/card1.png" },
  ];
  const mockHandleCardClick = vi.fn();

  test("renders Board with cards", () => {
    render(
      <Board cards={mockCards} handleCardClick={mockHandleCardClick} flipped={[]} isShuffling={false} />
    );
    expect(screen.getAllByTestId("card").length).toBe(2);
  });

  test("clicking a card triggers handleCardClick", () => {
    render(
      <Board cards={mockCards} handleCardClick={mockHandleCardClick} flipped={[]} isShuffling={false} />
    );
    fireEvent.click(screen.getAllByTestId("card")[0]);
    expect(mockHandleCardClick).toHaveBeenCalled();
  });
});
