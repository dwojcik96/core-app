import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import RouterComponent from "./routing/routing";

render(
  <Provider store={store}>
    <RouterComponent />
  </Provider>,
  document.getElementById("root")
);
