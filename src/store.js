import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cards: [],
      newCard: {
        number: null,
        description: "",
        id: "",
        link: "",
        pinned: false,
      },
      editableCard: null,

      isAddFormOpen: false,
      isEditFormOpen: false,
      isDeletePopoverOpen: false,
      baseUrl: "https://jsonplaceholder.typicode.com/comments",

      addCard: (card) => {
        set((state) => ({ cards: [...state.cards, card] }));
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

      setNewCard: (newCard) => set({ newCard }),
      setEditableCard: (editableCard) => set({ editableCard }),

      openAddForm: () => set({ isAddFormOpen: true, isEditFormOpen: false }),
      closeAddForm: () => set({ isAddFormOpen: false }),

      openEditForm: (card) =>
        set({ isEditFormOpen: true, isAddFormOpen: false, editableCard: card }),
      closeEditForm: () => set({ isEditFormOpen: false, editableCard: null }),

      openDeletePopover: () => set({ isDeletePopoverOpen: true }),
      closeDeletePopover: () => set({ isDeletePopoverOpen: false }),

      setNewCard: (newCard) => set({ newCard }),
      resetNewCard: () =>
        set({
          newCard: {
            number: null,
            description: "",
            id: "",
            link: "",
            pinned: false,
          },
        }),

      resetEditableCard: () => set({ editableCard: null }),
    }),
    {
      name: "gosha-helper",
    }
  )
);

export default useStore;
