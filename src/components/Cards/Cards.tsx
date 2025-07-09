import Card from "../Card/Card";
import "./Cards.css";
import useStore from "../../store";
import { useEffect, useState } from "react";
import type { ICard } from "../../types";
import { CARDS_CONFIG } from "../../constants";

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

  const cardsCount = `${filteredCards.length} / ${cards.length} cards`;

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="cards__container">
      <div className="cards__search-container">
        <input
          type="search"
          placeholder={CARDS_CONFIG.searchPlaceholder}
          className="cards__search-input"
          value={searchValue}
          onChange={handleSearch}
        />
        <div>{cardsCount}</div>
      </div>
      <div className="cards__cards-list-container">
        {filteredCards.length === 0 && (
          <div className="cards__no-cards">{CARDS_CONFIG.noDataText}</div>
        )}
        {filteredCards.map((card: ICard) => (
          <Card key={card.id} card={card} />
        ))}
        {filteredCards.length > 10 && (
          <div style={{ alignSelf: "center" }}>{CARDS_CONFIG.clownEmoji}</div>
        )}
      </div>
    </div>
  );
};

export default Cards;
