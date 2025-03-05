import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card Component", () => {
  test("renders card with front and back images", () => {
    render(<Card flipped={false} uniqueId={1} id={1} matched={false} image="/images/card1.png" handleCardClick={() => {}} />);

    const cardImages = screen.getAllByAltText("Card"); // Expect two images

    expect(cardImages).toHaveLength(2);
  });
});
