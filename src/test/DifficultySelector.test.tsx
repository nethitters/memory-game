import { render, screen } from "@testing-library/react";
import DifficultySelector from "../components/DifficultySelector";

describe("DifficultySelector Component", () => {
  test("renders difficulty buttons", () => {
    render(<DifficultySelector difficulty="medium" onDifficultyChange={() => {}} />);
    expect(screen.getByText("Easy")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Hard")).toBeInTheDocument();
  });
});
