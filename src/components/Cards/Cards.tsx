import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const cards = 10;
  return (
    <div className="cards__container">
      <input
        type="search"
        placeholder="Search"
        className="cards__search-input"
      />
      <div className="cards__cards-list-container">
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
