import React from "react";

export interface ResetButtonProps {
  resetGame: (difficulty: "easy" | "medium" | "hard") => void;
  difficulty: "easy" | "medium" | "hard";
}

const ResetButton: React.FC<ResetButtonProps> = ({ resetGame, difficulty }) => {
  return (
    <button
      onClick={() => resetGame(difficulty)} // Ensure it passes the correct difficulty
      className="mt-6 bg-red-500 text-white px-8 py-3 rounded-full shadow-lg transition duration-300 hover:bg-red-600 hover:scale-105"
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
