import { create } from "zustand";
import persist from "zustand/middleware";

const EMPTY_CARD = {
  number: 0,
  description: "",
  id: "",
};

const useStore = create(
  persist((set) => ({
    cards: [],
    newCard: EMPTY_CARD,

    isAddFormOpen: false,
    isEditFormOpen: false,
    isDeletePopoverOpen: false,

    addCard: () => {
      set((state) => ({ cards: [...state.cards, newCard] }));
    },

    deleteCard: (cardId) =>
      set((state) => ({
        cards: state.cards.filter((card) => card.id !== cardId),
      })),

    editCard: (editedCard) =>
      set((state) => ({
        cards: state.cards.map((card) =>
          card.id === editedCard.id ? editedCard : card
        ),
      })),

    openAddForm: () => set({ isAddFormOpen: true }),
    closeAddForm: () => set({ isAddFormOpen: false }),

    openEditForm: () => set({ isEditFormOpen: true }),
    closeEditForm: () => set({ isEditFormOpen: false }),

    openDeletePopover: () => set({ isDeletePopoverOpen: true }),
    closeDeletePopover: () => set({ isDeletePopoverOpen: false }),
  }))
);
