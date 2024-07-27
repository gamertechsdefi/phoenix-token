// components/RoadmapCard.js
const RoadmapCard = ({ header, details }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md p-6 m-4">
        <h2 className="text-2xl font-bold mb-4">{header}</h2>
        <ul className="list-disc list-inside text-gray-700">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RoadmapCard;
  