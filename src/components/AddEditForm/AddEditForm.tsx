import { useState } from "react";
import Lock from "../../icons/lock.svg";
import Unlock from "../../icons/unlock.svg";
import Close from "../../icons/close.svg";
import Reload from "../../icons/reload.svg";
import "./AddEditForm.css";
import { Editor } from "@tinymce/tinymce-react";
import type { ICard } from "../../types";

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
  setCard: (card: ICard) => void;
  handleLinkCreate: (value: string) => string;
  cardTitle: string;
  buttonTitle: string;
  card: ICard;
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
        placeholder="Branch number *"
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
          className="add-edit-form__input"
          placeholder="Environment link *"
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
          src={Reload}
          style={isLinkDisabled ? { opacity: 0.5, cursor: "not-allowed" } : {}}
          alt="reload"
          className="add-edit-form__reload-icon"
          onClick={() =>
            !isLinkDisabled &&
            setCard({
              ...card,
              link: handleLinkCreate(card.number),
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

      <input
        type="text"
        className="add-edit-form__input"
        placeholder="Description (optional)"
        value={card.description}
        onChange={(e) =>
          setCard({
            ...card,
            description: e.target.value,
          })
        }
      />

      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={card.notes}
        onEditorChange={(e) => {
          setCard({
            ...card,
            notes: e,
          });
        }}
        init={{
          placeholder: "Notes (optional)",
          height: 300,
          menubar: false,
          plugins: ["link", "lists", "code"],
          min_height: 300,
          toolbar:
            "undo redo | " +
            "bold italic underline strikethrough | link bullist numlist code |" +
            "fontsize fontfamily |" +
            "alignleft aligncenter alignright alignjustify |" +
            "forecolor backcolor | ",
          content_style: "body { font-family:Poppins,sans-serif; }",
        }}
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
