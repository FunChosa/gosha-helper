import Card from "../Card/Card";
import "./Cards.css";
// @ts-ignore
import useStore from "../../store";
import { useEffect, useState } from "react";

const Cards = () => {
  const { cards } = useStore((state: any) => state);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState(
    cards.sort((a: any, b: any) =>
      a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1
    )
  );

  useEffect(() => {
    setFilteredCards(
      cards.filter(
        (card: any) =>
          card.description.toLowerCase().includes(searchValue) ||
          card.number.toString().includes(searchValue)
      )
    );
  }, [searchValue, cards]);

  return (
    <div className="cards__container">
      <input
        type="search"
        placeholder="Search"
        className="cards__search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="cards__cards-list-container">
        {filteredCards.length === 0 && (
          <div className="cards__no-cards">no cards found</div>
        )}
        {filteredCards.map((card: any) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
