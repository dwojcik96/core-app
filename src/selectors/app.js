import { createSelector } from "reselect";

const appSelector = (state) => state.app;

export const userSelector = createSelector(appSelector, ({ user }) => user);
