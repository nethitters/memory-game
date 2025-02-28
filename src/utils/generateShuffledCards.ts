export type DifficultyLevel = "easy" | "medium" | "hard";

const generateShuffledCards = (difficulty: DifficultyLevel) => {
  const images = [
    "/images/card1.png",
    "/images/card2.png",
    "/images/card3.png",
    "/images/card4.png",
    "/images/card5.png",
    "/images/card6.png",
    "/images/card7.png",
    "/images/card8.png",
    "/images/card9.png",
    "/images/card10.png",
    "/images/card11.png",
    "/images/card12.png",
    "/images/card13.png",
    "/images/card14.png",
    "/images/card15.png",
    "/images/card16.png",
    "/images/card17.png",
    "/images/card18.png",
    "/images/card19.png",
    "/images/card20.png",
    "/images/card21.png",
    "/images/card22.png",
    "/images/card23.png",
    "/images/card24.png",
  ];

  const difficultyPairs: Record<DifficultyLevel, number> = {
    easy: 4,
    medium: 8,
    hard: 12,
  };

  const numPairs = difficultyPairs[difficulty];
  const selectedImages = images.slice(0, numPairs);
  
  const pairs = selectedImages.map((image, i) => ({
    id: i,
    image,
    matched: false,
  }));

  const cards = [...pairs, ...pairs].map((card, index) => ({
    ...card,
    uniqueId: index,
  }));

  // Shuffle cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
};

export default generateShuffledCards;
