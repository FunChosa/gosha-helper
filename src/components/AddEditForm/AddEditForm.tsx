import { useState } from "react";
import Lock from "../../icons/lock.svg";
import Unlock from "../../icons/unlock.svg";
import Close from "../../icons/close.svg";
import "./AddEditForm.css";

const AddEditForm = ({
  closeForm,
  handleSaveForm,
  resetCard,
  setCard,
  cardTitle,
  buttonTitle,
  card,
  handleLinkCreate,
}: {
  closeForm: () => void;
  handleSaveForm: () => void;
  resetCard: () => void;
  setCard: (card: any) => void;
  handleLinkCreate: (value: string) => string;
  cardTitle: string;
  buttonTitle: string;
  card: any;
}) => {
  const [isLinkDisabled, setIsLinkDisabled] = useState(true);
  const handleToggleLinkDisabled = () => {
    setIsLinkDisabled(!isLinkDisabled);
  };

  const handleCancelForm = () => {
    resetCard();
    closeForm();
  };

  return (
    <div className="add-edit-form__container">
      <div className="add-edit-form__header">
        <h1>{cardTitle}</h1>
        <img
          src={Close}
          alt="close"
          className="add-edit-form__close-icon"
          onClick={handleCancelForm}
        />
      </div>

      <input
        type="text"
        placeholder="Branch number"
        className="add-edit-form__input-branch"
        value={card.number || ""}
        onChange={(e) => {
          setCard({
            ...card,
            number: e.target.value || "",
            link: handleLinkCreate(e.target.value),
          });
        }}
      />

      <div className="add-edit-form__link-container">
        <input
          type="text"
          className="add-edit-form__input-link"
          placeholder="Environment link"
          value={card.link || ""}
          disabled={isLinkDisabled}
          onChange={(e) =>
            setCard({
              ...card,
              link: e.target.value,
            })
          }
        />
        <img
          src={isLinkDisabled ? Lock : Unlock}
          alt="lock"
          className="add-edit-form__lock-icon"
          onClick={handleToggleLinkDisabled}
        />
      </div>

      <textarea
        placeholder="Description (optional)"
        value={card.description}
        onChange={(e) =>
          setCard({
            ...card,
            description: e.target.value,
          })
        }
      />

      <button
        onClick={() => {
          handleSaveForm();
          setIsLinkDisabled(true);
        }}
        className="add-edit-form__button"
        disabled={!card.number || !card.link}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default AddEditForm;
