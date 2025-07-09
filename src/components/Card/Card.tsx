import "./Card.css";
import Delete from "../../icons/delete.svg";
import PinTrue from "../../icons/pin_true.svg";
import PinFalse from "../../icons/pin_false.svg";
import Edit from "../../icons/edit.svg";
import useStore from "../../store";
import type { ICard } from "../../types";
import { useState } from "react";
import { CARD_CONFIG } from "../../constants";

const Card = ({ card }: { card: ICard }) => {
  const { deleteCard, editCard, openEditForm, editableCard, closeEditForm } =
    useStore((state: any) => state);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleDeleteConfirmation = (e: any) => {
    e.stopPropagation();
    setDeleteConfirmation(!deleteConfirmation);
  };

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteCard(card.id);
    if (editableCard?.id === card.id) {
      closeEditForm();
    }
    setDeleteConfirmation(false);
  };

  const handlePin = (e: any) => {
    e.stopPropagation();
    editCard({ ...card, pinned: !card.pinned });
  };

  const handleEdit = (e: any) => {
    e.stopPropagation();
    openEditForm(card);
  };

  const handleOpenLink = (e: any) => {
    e.stopPropagation();
    window.open(card.link);
  };

  return (
    <div className="card__container" onClick={handleEdit}>
      <div className="card__content-top">
        <div className="card__content-open-env" onClick={handleOpenLink}>
          {card.number}
        </div>
        <div className="card__content-top-right">
          {deleteConfirmation ? (
            <div className="card__content-top-right-icons">
              <button
                className="card__content-delete-button"
                onClick={handleDelete}
              >
                {CARD_CONFIG.deleteButtonText}
              </button>
              <button
                className="card__content-cancel-button"
                onClick={handleDeleteConfirmation}
              >
                {CARD_CONFIG.cancelButtonText}
              </button>
            </div>
          ) : (
            <div className="card__content-top-right-icons">
              <img
                src={card.pinned ? PinTrue : PinFalse}
                alt="pinned"
                className="card__content-top-right-icon"
                onClick={handlePin}
              />
              <img
                src={Edit}
                alt="edit"
                className="card__content-top-right-icon"
                onClick={handleEdit}
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
        {card.description || CARD_CONFIG.defaultDescription}
      </div>
    </div>
  );
};

export default Card;
