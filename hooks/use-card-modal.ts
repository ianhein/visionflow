import { create } from "zustand";

type CardModalStore = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => {
    console.log("Opening modal with id:", id); // Agrega esto para depurar
    set({ isOpen: true, id });
  },
  onClose: () => {
    console.log("Closing modal"); // Y esto también
    set({ isOpen: false, id: undefined });
  },
}));
