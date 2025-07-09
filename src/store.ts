import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ICard, IStore } from "./types";

const useStore = create(
  persist(
    (set) => ({
      cards: [],
      newCard: {
        number: "",
        description: "",
        notes: "",
        id: "",
        link: "",
        pinned: false,
      },
      editableCard: null,

      isAddFormOpen: false,
      isEditFormOpen: false,
      isDeletePopoverOpen: false,
      isSettingsOpen: false,
      baseUrl: "",

      addCard: (card: ICard) => {
        set((state: { cards: ICard[] }) => ({ cards: [...state.cards, card] }));
      },

      deleteCard: (cardId: string) =>
        set((state: { cards: ICard[] }) => ({
          cards: state.cards.filter(
            (card: { id: string }) => card.id !== cardId
          ),
        })),

      editCard: (editedCard: ICard) =>
        set((state: { cards: ICard[] }) => ({
          cards: state.cards.map((card: ICard) =>
            card.id === editedCard.id ? editedCard : card
          ),
        })),

      setNewCard: (newCard: ICard) => set({ newCard }),
      setEditableCard: (editableCard: ICard) => set({ editableCard }),

      openAddForm: () => set({ isAddFormOpen: true, isEditFormOpen: false }),
      closeAddForm: () => set({ isAddFormOpen: false }),

      openSettings: () => set({ isSettingsOpen: true }),
      closeSettings: () => set({ isSettingsOpen: false }),

      openEditForm: (card: ICard) =>
        set({ isEditFormOpen: true, isAddFormOpen: false, editableCard: card }),
      closeEditForm: () => set({ isEditFormOpen: false, editableCard: null }),

      openDeletePopover: () => set({ isDeletePopoverOpen: true }),
      closeDeletePopover: () => set({ isDeletePopoverOpen: false }),

      resetNewCard: () =>
        set({
          newCard: {
            number: "",
            description: "",
            notes: "",
            id: "",
            link: "",
            pinned: false,
          },
        }),

      resetEditableCard: () => set({ editableCard: null }),
      setBaseUrl: (baseUrl: string) => set({ baseUrl }),
    }),
    {
      name: "gosha-helper",
      partialize: (state: IStore) => ({
        cards: state.cards,
        baseUrl: state.baseUrl,
      }),
    }
  )
);

export default useStore;
