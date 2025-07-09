export interface ICard {
  id: string;
  number: string;
  link: string;
  description?: string;
  notes?: string;
  pinned: boolean;
}

export interface IStore {
  cards: ICard[];
  newCard: ICard;
  editableCard: ICard | null;
  isAddFormOpen: boolean;
  isEditFormOpen: boolean;
  isDeletePopoverOpen: boolean;
  isSettingsOpen: boolean;
  baseUrl: string;
}
