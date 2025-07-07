import AddEditForm from "../AddEditForm/AddEditForm";
import "./Viewer.css";
// @ts-ignore
import useStore from "../../store";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

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
    return `${baseUrl}/${value}`;
  };

  useEffect(() => {
    if (cards.length === 0) {
      openAddForm();
    }
    if (!cards.find((card: any) => editableCard?.id === card.id)) {
      closeEditForm();
    }
  }, [cards]);

  return (
    <div className="viewer__container">
      <div className="viewer__add-button-container">
        <button className="viewer__add-button" onClick={openAddForm}>
          + add
        </button>
      </div>
      {isAddFormOpen && (
        <AddEditForm
          closeForm={closeAddForm}
          cardTitle="Add new card"
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
          cardTitle={`Edit: MON-${
            cards.find((card: any) => editableCard?.id === card.id).number
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
