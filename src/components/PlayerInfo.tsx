import React from "react";
import { Hourglass } from "lucide-react";

interface PlayerInfoProps {
  name: string;
  correctAnswers: number;
  timeLeft: number;
  gameOver: boolean;
  getTimeClass: (timeLeft: number) => string;
  align?: "left" | "center" | "right";
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  name,
  correctAnswers,
  timeLeft,
  gameOver,
  getTimeClass,
  align = "center",
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center 
        ${align === "left" ? "md:items-start md:text-left" : ""} 
        ${align === "right" ? "md:items-end md:text-right" : ""}`}
    >
      <p className="text-lg font-semibold text-gray-700">{name}</p>
      <p className="text-md text-gray-600">Correct: {correctAnswers}</p>
      <p className={`text-md font-semibold mt-1 ${getTimeClass(timeLeft)}`}>
        {gameOver ? (
          "Time's Up!"
        ) : (
          <span className="flex items-center">
            <Hourglass size={18} className="mr-1" /> {timeLeft}s
          </span>
        )}
      </p>
    </div>
  );
};

export default PlayerInfo;
