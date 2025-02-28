import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("players switch turns when a pair doesn't match", () => {
  render(<App />);
  
  const cards = screen.getAllByAltText("Card");
  fireEvent.click(cards[0]); // First card
  fireEvent.click(cards[2]); // Second card (not a match)

  expect(screen.getByText("Player 2's Turn")).toBeInTheDocument();
});
