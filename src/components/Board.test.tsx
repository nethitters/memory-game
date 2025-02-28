import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Board from "../components/Board";
import Card from "../components/Card";
import DifficultySelector from "../components/DifficultySelector";
import PlayerInfo from "../components/PlayerInfo";
import ResetButton from "../components/ResetButton";

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

describe("Card Component", () => {
  test("renders card with front and back images", () => {
    render(<Card flipped={false} uniqueId={1} id={1} matched={false} image="/images/card1.png" handleCardClick={() => {}} />);

    const cardImages = screen.getAllByAltText("Card"); // Expect two images

    expect(cardImages).toHaveLength(2);
  });
});

describe("DifficultySelector Component", () => {
  test("renders difficulty buttons", () => {
    render(<DifficultySelector difficulty="medium" onDifficultyChange={() => {}} />);
    expect(screen.getByText("Easy")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Hard")).toBeInTheDocument();
  });
});

const getTimeClass = (timeLeft: number) => {
  if (timeLeft <= 5) return "text-red-600 animate-bounce";
  if (timeLeft <= 10) return "text-red-500 animate-pulse";
  return "text-black";
};

describe("PlayerInfo Component", () => {
  test("renders player info with score and timer", () => {
    render(<PlayerInfo name="Player 1" correctAnswers={3} timeLeft={15} gameOver={false} getTimeClass={getTimeClass} />);

    expect(screen.getByText(/Player 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/⏳ 15s/i)).toBeInTheDocument();
  });
});

describe("ResetButton Component", () => {
  test("renders Reset Game button", () => {
    render(<ResetButton resetGame={() => {}} difficulty="medium" />);
    expect(screen.getByText("Reset Game")).toBeInTheDocument();
  });

  test("clicking reset button calls resetGame", () => {
    const mockResetGame = vi.fn();
    render(<ResetButton resetGame={mockResetGame} difficulty="medium" />);
    fireEvent.click(screen.getByText("Reset Game"));
    expect(mockResetGame).toHaveBeenCalled();
  });
});
