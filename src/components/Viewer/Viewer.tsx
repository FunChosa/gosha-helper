import AddEditForm from "../AddEditForm/AddEditForm";
import Settings from "../../icons/settings.svg";
import "./Viewer.css";
// @ts-ignore
import useStore from "../../store";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import UrlSettings from "./UrlSettings";
import type { ICard } from "../../types";

const Viewer = () => {
  const {
    addCard,
    editCard,
    editableCard,
    setEditableCard,
    newCard,
    setNewCard,
    isEditFormOpen,
    closeEditForm,
    isAddFormOpen,
    openAddForm,
    closeAddForm,
    resetNewCard,
    resetEditableCard,
    baseUrl,
    cards,
    isSettingsOpen,
    openSettings,
    closeSettings,
  } = useStore((state: any) => state);

  const handleAddCard = () => {
    newCard.id = uuidv4();
    addCard(newCard);
    resetNewCard();
  };

  const handleEditCard = () => {
    editCard(editableCard);
    setEditableCard(null);
    closeEditForm();
  };

  const handleLinkCreate = (value: string) => {
    if (!baseUrl) return value;
    return baseUrl.replace(/{{branchNumber}}/g, value);
  };

  useEffect(() => {
    if (cards.length === 0) {
      openAddForm();
    }
    if (!cards.find((card: ICard) => editableCard?.id === card.id)) {
      closeEditForm();
      resetEditableCard();
      openAddForm();
    }
  }, [cards]);

  const handleToggleOpenSettings = () => {
    return isSettingsOpen ? closeSettings() : openSettings();
  };

  return (
    <div className="viewer__container">
      <div className="viewer__add-button-container">
        <button className="viewer__add-button" onClick={openAddForm}>
          + create
        </button>
        <img
          src={Settings}
          alt="edit"
          className="viewer__settings-icon"
          onClick={handleToggleOpenSettings}
        />
      </div>
      {isSettingsOpen && <UrlSettings />}
      {isAddFormOpen && (
        <AddEditForm
          closeForm={closeAddForm}
          cardTitle="New environment"
          buttonTitle="Add"
          handleSaveForm={handleAddCard}
          resetCard={resetNewCard}
          card={newCard}
          setCard={setNewCard}
          handleLinkCreate={handleLinkCreate}
        />
      )}
      {isEditFormOpen && (
        <AddEditForm
          closeForm={closeEditForm}
          cardTitle={`Edit: ${
            editableCard?.id
              ? cards.find((card: ICard) => editableCard?.id === card.id)
                  ?.number
              : undefined
          }`}
          buttonTitle="Update"
          handleSaveForm={handleEditCard}
          resetCard={resetEditableCard}
          card={editableCard}
          setCard={setEditableCard}
          handleLinkCreate={handleLinkCreate}
        />
      )}
    </div>
  );
};

export default Viewer;
