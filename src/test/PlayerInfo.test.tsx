import { render, screen } from "@testing-library/react";
import PlayerInfo from "../components/PlayerInfo";

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
