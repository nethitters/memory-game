import { Link } from "react-router-dom";

export default function OnlineGame() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-4">Survival Mode 🏆</h1>
      <p className="text-lg text-gray-600 mb-6">This game mode is coming soon! Stay tuned for updates.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
