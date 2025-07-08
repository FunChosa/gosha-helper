import "./Card.css";
import Delete from "../../icons/delete.svg";
import PinTrue from "../../icons/pin_true.svg";
import PinFalse from "../../icons/pin_false.svg";
import Edit from "../../icons/edit.svg";
// @ts-ignore
import useStore from "../../store";
import type { ICard } from "../../types";
import { useState } from "react";

const Card = ({ card }: { card: ICard }) => {
  const { deleteCard, editCard, openEditForm } = useStore(
    (state: any) => state
  );
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleDeleteConfirmation = (e: any) => {
    e.stopPropagation();
    setDeleteConfirmation(!deleteConfirmation);
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteCard(card.id);
    setDeleteConfirmation(false);
  };

  const handleEdit = (e: any) => {
    e.stopPropagation();
    editCard({ ...card, pinned: !card.pinned });
  };

  return (
    <div className="card__container" onClick={() => openEditForm(card)}>
      <div className="card__content-top">
        <div
          className="card__content-open-env"
          onClick={() => window.open(card.link)}
        >
          {card.number}
        </div>
        <div className="card__content-top-right">
          {deleteConfirmation ? (
            <div className="card__content-top-right-icons">
              <button
                className="card__content-delete-button"
                onClick={handleDelete}
              >
                Yes, delete!
              </button>
              <button
                className="card__content-cancel-button"
                onClick={handleDeleteConfirmation}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="card__content-top-right-icons">
              <img
                src={card.pinned ? PinTrue : PinFalse}
                alt="pinned"
                className="card__content-top-right-icon"
                onClick={handleEdit}
              />
              <img
                src={Edit}
                alt="edit"
                className="card__content-top-right-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  openEditForm(card);
                }}
              />
              <img
                src={Delete}
                alt="delete"
                className="card__content-top-right-icon"
                onClick={handleDeleteConfirmation}
              />
            </div>
          )}
        </div>
      </div>
      <div className="card__content-bottom">
        {card.description || "no desc"}
      </div>
    </div>
  );
};

export default Card;
