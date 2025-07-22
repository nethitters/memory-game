import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import ResetButton from "../components/ResetButton";
import DifficultySelector from "../components/DifficultySelector";
import generateShuffledCards, { DifficultyLevel } from "../utils/generateShuffledCards";
import { Home } from 'lucide-react';
import { Hourglass } from "lucide-react";

export default function SurvivalGame() {
  const timeLimits: Record<DifficultyLevel, number> = {
    easy: 60,
    medium: 90,
    hard: 120,
  };

  const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
  const [cards, setCards] = useState(generateShuffledCards(difficulty));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimits[difficulty]);
  const [gameOver, setGameOver] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (!timerRunning || gameOver) return;

    if (timeLeft === 0) {
      setGameOver(true);
      setTimerRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, timerRunning, gameOver]);

  const handleDifficultyChange = (newDifficulty: DifficultyLevel) => {
    setDifficulty(newDifficulty);
    resetGame(newDifficulty);
  };

  const handleCardClick = (uniqueId: number) => {
    if (gameOver || flipped.length === 2 || flipped.includes(uniqueId)) return;

    if (!timerRunning) setTimerRunning(true); // Start timer on first move

    const newFlipped = [...flipped, uniqueId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const firstCard = cards.find((card) => card.uniqueId === first);
      const secondCard = cards.find((card) => card.uniqueId === second);

      if (!firstCard || !secondCard) return;

      if (firstCard.id === secondCard.id) {
        setCards((prevCards) => {
          const updatedCards = prevCards.map((card) =>
            card.id === firstCard.id ? { ...card, matched: true } : card
          );

          // ✅ **Check if ALL cards are matched**
          if (updatedCards.every((card) => card.matched)) {
            setGameOver(true);
            setTimerRunning(false); // Stop the timer when game is over
          }

          return updatedCards;
        });

        setScore((prev) => prev + 1);
        setTimeLeft((prev) => prev + 5); // Bonus time for correct match
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const resetGame = (newDifficulty: DifficultyLevel = difficulty) => {
    setIsShuffling(true);

    setTimeout(() => {
      setCards(generateShuffledCards(newDifficulty));
      setFlipped([]);
      setScore(0);
      setGameOver(false);
      setIsShuffling(false);
      setTimerRunning(false);
      setTimeLeft(timeLimits[newDifficulty]);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center p-8">
      {/* Title & Difficulty Selector */}
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 drop-shadow-md">Survival Mode</h1>
        <DifficultySelector difficulty={difficulty} onDifficultyChange={handleDifficultyChange} />
      </div>

      <p className="text-lg font-semibold text-gray-700 mt-2">
        {gameOver ? (
          "Game Over!"
        ) : (
          <span className="flex items-center">
            <Hourglass size={18} className="mr-1" /> {timeLeft}s
          </span>
        )}
      </p>
      <p className="text-md mt-2 text-gray-600">Score: {score}</p>

      <Board cards={cards} handleCardClick={handleCardClick} flipped={flipped} isShuffling={isShuffling} />

      <ResetButton resetGame={resetGame} difficulty={difficulty} />
      
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition flex items-center gap-x-2">
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
}
