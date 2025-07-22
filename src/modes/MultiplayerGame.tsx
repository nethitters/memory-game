import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Board from "../components/Board";
import PlayerInfo from "../components/PlayerInfo";
import DifficultySelector from "../components/DifficultySelector";
import ResetButton from "../components/ResetButton";
import generateShuffledCards, { DifficultyLevel } from "../utils/generateShuffledCards";
import { Home } from 'lucide-react';

export default function MultiplayerGame() {
  const timeLimits: Record<DifficultyLevel, { p1: number; p2: number }> = {
    easy: { p1: 60, p2: 60 },
    medium: { p1: 90, p2: 90 },
    hard: { p1: 120, p2: 120 },
  };

  const [difficulty, setDifficulty] = useState<DifficultyLevel>("medium");
  const [cards, setCards] = useState(generateShuffledCards(difficulty));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [timeLeftP1, setTimeLeftP1] = useState(timeLimits[difficulty].p1);
  const [timeLeftP2, setTimeLeftP2] = useState(timeLimits[difficulty].p2);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning || gameOver) return; // Stop timer when game is over

    const currentTimer = playerTurn === 1 ? timeLeftP1 : timeLeftP2;

    if (currentTimer === 0) {
      setGameOver(true);
      setTimerRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      if (playerTurn === 1) {
        setTimeLeftP1((prev) => prev - 1);
      } else {
        setTimeLeftP2((prev) => prev - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timerRunning, timeLeftP1, timeLeftP2, playerTurn, gameOver]);

  const handleDifficultyChange = (newDifficulty: DifficultyLevel) => {
    setDifficulty(newDifficulty);
    resetGame(newDifficulty);
  };

  const getGameStatus = () => {
    if (!gameOver) {
      return `Player ${playerTurn}'s Turn`;
    }

    if (scores.player1 > scores.player2) {
      return "🏆 Player 1 Wins!";
    }
    if (scores.player1 < scores.player2) {
      return "🏆 Player 2 Wins!";
    }
    return "🤝 It's a Tie!";
  };

  const resetGame = (newDifficulty: DifficultyLevel = difficulty) => {
    setIsShuffling(true);

    setTimeout(() => {
      setCards(generateShuffledCards(newDifficulty));
      setFlipped([]);
      setPlayerTurn(1);
      setScores({ player1: 0, player2: 0 });
      setGameOver(false);
      setIsShuffling(false);
      setTimerRunning(false); // Ensure timers stay paused until the first move

      // Reset timers
      setTimeLeftP1(timeLimits[newDifficulty].p1);
      setTimeLeftP2(timeLimits[newDifficulty].p2);
    }, 1000);
  };

  const handleCardClick = (uniqueId: number) => {
    if (gameOver || flipped.length === 2 || flipped.includes(uniqueId)) return; // Stop if game is over

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

          if (updatedCards.every((card) => card.matched)) {
            setGameOver(true);
            setTimerRunning(false); // Stop the timer when game is over
          }

          return updatedCards;
        });

        setScores((prevScores) => {
          const currentPlayer = playerTurn === 1 ? "player1" : "player2";
          return {
            ...prevScores,
            [currentPlayer]: prevScores[currentPlayer] + 1,
          };
        });
      } else {
        setPlayerTurn((prev) => (prev === 1 ? 2 : 1));
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const getTimeClass = (timeLeft: number) => {
    if (timeLeft <= 5) return "text-red-600 animate-bounce";
    if (timeLeft <= 10) return "text-red-500 animate-pulse";
    return "text-black";
  };

  return (
    <div className="flex flex-col items-center p-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 md:p-6 w-full max-w-4xl">
        {/* Player 1 Info */}
        <PlayerInfo
          name="Player 1"
          correctAnswers={scores.player1}
          timeLeft={timeLeftP1}
          gameOver={gameOver}
          getTimeClass={getTimeClass}
          align="left"
        />

        {/* Title & Difficulty Selector */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800 drop-shadow-md">Memory&nbsp;Game</h1>
          <DifficultySelector difficulty={difficulty} onDifficultyChange={handleDifficultyChange} />
        </div>

        {/* Player 2 Info */}
        <PlayerInfo
          name="Player 2"
          correctAnswers={scores.player2}
          timeLeft={timeLeftP2}
          gameOver={gameOver}
          getTimeClass={getTimeClass}
          align="right"
        />
      </div>

      {/* Game Status */}
      <p className="text-lg font-semibold text-gray-700 mt-2">{getGameStatus()}</p>

      {/* Game Board */}
      <Board cards={cards} handleCardClick={handleCardClick} flipped={flipped} isShuffling={isShuffling} />

      {/* Reset Button */}
      <ResetButton resetGame={resetGame} difficulty={difficulty} />

      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition flex items-center gap-x-2">
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
}
