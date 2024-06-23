import { create } from "zustand";

const authStore = (set: any) => ({
  authUser: {
    email: "",
    password: "",
    phoneNumber: "",
    displayName:"",
  },
  isLoggedIn: false,

  setAuthUser: (user: any) => {
    set((state: any) => ({
      ...state,
      authUser: { ...state.authUser, ...user },
    }));
  },

  setIsLoggedIn: (loggedIn: boolean) => {
    set((state: any) => ({
      ...state,
      isLoggedIn: loggedIn,
    }));
  },
});

const useAuthStore = create(authStore);
export default useAuthStore;
