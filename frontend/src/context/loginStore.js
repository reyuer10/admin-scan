import { create } from "zustand";
import { persist } from "zustand/middleware";

const loginStore = persist(
  (set, get) => ({
    usernameValue: "",
    passwordValue: "",
  }),
  {
    name: "",
    partialize: (state) => ({}),
  }
);

const useLoginStore = create(loginStore);
export default useLoginStore;
