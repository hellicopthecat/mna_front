import {create} from "zustand";

//types
interface IUserNameMode {
  userNameMode: boolean;
  setUserName: () => void;
  setEmail: () => void;
}
interface IExistsToken {
  existsUser: boolean;
  loginUserState: (token: string) => void;
  logOutUserState: () => void;
}
// constants
const TOKEN = "TOKEN";

// stores
export const loginStore = create<IUserNameMode>((set) => ({
  userNameMode: true,
  setUserName: () => set((state) => ({userNameMode: true})),
  setEmail: () => set((state) => ({userNameMode: false})),
}));

export const existsTokenStore = create<IExistsToken>((set) => ({
  existsUser:
    typeof window !== "undefined" && Boolean(sessionStorage.getItem(TOKEN)),

  loginUserState: (token) => {
    set(() => ({existsUser: true}));
    sessionStorage.setItem(TOKEN, token);
  },
  logOutUserState: () => {
    set(() => ({existsUser: Boolean(sessionStorage.getItem(TOKEN))}));
    sessionStorage.removeItem(TOKEN);
  },
}));
