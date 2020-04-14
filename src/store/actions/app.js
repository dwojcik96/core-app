import { INIT_APP } from "../types/app";

export const initApp = (user) => ({
  type: INIT_APP,
  user,
});
