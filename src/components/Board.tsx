import Card from "./Card";

interface Card {
  uniqueId: number;
  id: number;
  matched: boolean;
  image: string;
}

interface BoardProps {
  cards: Card[];
  handleCardClick: (uniqueId: number) => void;
  flipped: number[];
  isShuffling: boolean;
}

export default function Board({ cards, handleCardClick, flipped, isShuffling }: BoardProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 p-6 bg-gray-100 shadow-lg rounded-xl border border-gray-300 ${
        isShuffling ? "shuffle-animation" : ""
      }`}
    >
      {cards.map((card) => (
        <Card
          key={card.uniqueId}
          uniqueId={card.uniqueId}
          id={card.id}
          image={card.image}
          matched={card.matched}
          flipped={flipped.includes(card.uniqueId) || card.matched}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
