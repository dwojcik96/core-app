import { INIT_APP } from "../types/app";

const initialState = {
  user: {},
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};

export default app;
