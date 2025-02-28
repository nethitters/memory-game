import React from "react";

interface DifficultySelectorProps {
  difficulty: "easy" | "medium" | "hard";
  onDifficultyChange: (newDifficulty: "easy" | "medium" | "hard") => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ difficulty, onDifficultyChange }) => {
  return (
    <div className="flex gap-2 mt-2">
      {["easy", "medium", "hard"].map((level) => (
        <button
          key={level}
          onClick={() => onDifficultyChange(level as "easy" | "medium" | "hard")}
          className={`px-4 py-1 text-sm rounded-lg ${
            difficulty === level ? `bg-${level === "easy" ? "green" : level === "medium" ? "yellow" : "red"}-500 text-white` : "bg-gray-300 text-gray-700"
          } transition hover:bg-${level === "easy" ? "green" : level === "medium" ? "yellow" : "red"}-600`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
