import { INIT } from "../types/app";

export const init = (user) => ({
  type: INIT,
  user,
});
