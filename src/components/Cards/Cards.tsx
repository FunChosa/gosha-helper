import Card from "../Card/Card";
import "./Cards.css";
// @ts-ignore
import useStore from "../../store";
import { useEffect, useState } from "react";
import type { ICard } from "../../types";

const Cards = () => {
  const { cards } = useStore((state: any) => state);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState(
    cards.sort((a: ICard, b: ICard) =>
      a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1
    )
  );

  useEffect(() => {
    setFilteredCards(
      cards.filter(
        (card: ICard) =>
          card.description?.toLowerCase().includes(searchValue) ||
          card.number.toString().includes(searchValue)
      )
    );
  }, [searchValue, cards]);

  return (
    <div className="cards__container">
      <div className="cards__search-container">
        <input
          type="search"
          placeholder="Search"
          className="cards__search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          {filteredCards.length} / {cards.length} cards
        </div>
      </div>
      <div className="cards__cards-list-container">
        {filteredCards.length === 0 && (
          <div className="cards__no-cards">no cards found</div>
        )}
        {filteredCards.map((card: ICard) => (
          <Card key={card.id} card={card} />
        ))}
        {filteredCards.length > 10 && (
          <div style={{ alignSelf: "center" }}>🤡</div>
        )}
      </div>
    </div>
  );
};

export default Cards;
