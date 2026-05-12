import "../styles/carcard.css";
type CarProps = {
  name: string;
  hp: string;
  image: string;
  onSelect: () => void;
};

function CarCard({ name, hp, image, onSelect}: CarProps) {
  return (
    <div className="carCard">
      <img src={image} alt={name} width="200" />
      <h2>{name}</h2>
      <p>{hp}</p>
      <button onClick={onSelect}>View Car</button>
    </div>
  );
}

export default CarCard;