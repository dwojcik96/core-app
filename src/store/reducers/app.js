import { INIT } from "../types/app";

const initialState = {
  user: {},
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      const { user } = action;
      return [...state, user];
    default:
      return state;
  }
};

export default app;
