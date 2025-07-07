import "./Card.css";
import Delete from "../../icons/delete.svg";
import PinTrue from "../../icons/pin_true.svg";
import PinFalse from "../../icons/pin_false.svg";
import Edit from "../../icons/edit.svg";
// @ts-ignore
import useStore from "../../store";

const Card = ({ card }: any) => {
  const { deleteCard, editCard, openEditForm } = useStore(
    (state: any) => state
  );

  return (
    <div className="card__container">
      <div className="card__content-top">
        <div
          className="card__content-open-env"
          onClick={() => window.open(card.link)}
        >
          {card.number}
        </div>
        <div className="card__content-top-right">
          <div className="card__content-top-right-icons">
            <img
              src={card.pinned ? PinTrue : PinFalse}
              alt="pinned"
              className="card__content-top-right-icon"
              onClick={() => editCard({ ...card, pinned: !card.pinned })}
            />
            <img
              src={Edit}
              alt="edit"
              className="card__content-top-right-icon"
              onClick={() => openEditForm(card)}
            />
            <img
              src={Delete}
              alt="delete"
              className="card__content-top-right-icon"
              onClick={() => deleteCard(card.id)}
            />
          </div>
        </div>
      </div>
      <div className="card__content-bottom">
        {card.description || "no desc"}
      </div>
    </div>
  );
};

export default Card;
