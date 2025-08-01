import { Link } from "react-router-dom";
import { Users, Clock, Globe } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col flex-grow items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Memory Game</h1>
      <p className="text-lg text-gray-600 mb-8">Select a game mode to start playing!</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link to="/multiplayer" className="landing-button bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white rounded-lg shadow-md transition flex items-center justify-center gap-x-2">
          <Users size={20} />
          Multiplayer
        </Link>
        <Link to="/survival" className="landing-button bg-green-500 hover:bg-green-600 px-6 py-3 text-white rounded-lg shadow-md transition flex items-center justify-center gap-x-2">
          <Clock size={20} />
          Survival
        </Link>
        <Link to="/online" className="landing-button bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-white rounded-lg shadow-md transition flex items-center justify-center gap-x-2">
          <Globe size={20} />
          Online Play
        </Link>
      </div>
    </div>
  );
}
