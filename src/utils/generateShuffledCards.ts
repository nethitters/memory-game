export type DifficultyLevel = "easy" | "medium" | "hard";

const generateShuffledCards = (difficulty: DifficultyLevel) => {
  const images = [
    `${import.meta.env.BASE_URL}images/card1.png`,
    `${import.meta.env.BASE_URL}images/card2.png`,
    `${import.meta.env.BASE_URL}images/card3.png`,
    `${import.meta.env.BASE_URL}images/card4.png`,
    `${import.meta.env.BASE_URL}images/card5.png`,
    `${import.meta.env.BASE_URL}images/card6.png`,
    `${import.meta.env.BASE_URL}images/card7.png`,
    `${import.meta.env.BASE_URL}images/card8.png`,
    `${import.meta.env.BASE_URL}images/card9.png`,
    `${import.meta.env.BASE_URL}images/card10.png`,
    `${import.meta.env.BASE_URL}images/card11.png`,
    `${import.meta.env.BASE_URL}images/card12.png`,
    `${import.meta.env.BASE_URL}images/card13.png`,
    `${import.meta.env.BASE_URL}images/card14.png`,
    `${import.meta.env.BASE_URL}images/card15.png`,
    `${import.meta.env.BASE_URL}images/card16.png`,
    `${import.meta.env.BASE_URL}images/card17.png`,
    `${import.meta.env.BASE_URL}images/card18.png`,
    `${import.meta.env.BASE_URL}images/card19.png`,
    `${import.meta.env.BASE_URL}images/card20.png`,
    `${import.meta.env.BASE_URL}images/card21.png`,
    `${import.meta.env.BASE_URL}images/card22.png`,
    `${import.meta.env.BASE_URL}images/card23.png`,
    `${import.meta.env.BASE_URL}images/card24.png`,
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
