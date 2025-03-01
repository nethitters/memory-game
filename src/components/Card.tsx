interface CardProps {
  uniqueId: number;
  id: number;
  matched: boolean;
  image: string;
  flipped: boolean;
  handleCardClick: (uniqueId: number) => void;
}

export default function Card({ uniqueId, image, flipped, handleCardClick }: CardProps) {
  return (
    <div
      data-testid="card"
      className="w-24 h-32 bg-white rounded-xl flex items-center justify-center text-gray-800 text-2xl cursor-pointer shadow-lg"
      onClick={() => handleCardClick(uniqueId)}
    >
      <div className={`flip-card-inner ${flipped ? "rotate-y-180" : ""}`}>
        <div className="flip-card-front bg-blue-500 flex items-center justify-center rounded-lg text-2xl">
          <img src="/images/card-face.png" alt="Card" />
        </div>
        <div className="flip-card-back bg-blue-500 flex items-center justify-center rounded-lg">
          <img src={image} alt="Card" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}
