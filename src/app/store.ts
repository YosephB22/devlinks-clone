type User = {
  firstName: string;
  lastName: string;
  email: string;
};
import { create } from "zustand";
export const useStore = create<User>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
}));
