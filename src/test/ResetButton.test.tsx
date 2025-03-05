import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ResetButton from "../components/ResetButton";

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
