import React from "react";

export const publicRoutes = [
  {
    path: "/",
    component: () => <div />,
    exact: true,
  },
  {
    path: "/public",
    component: () => <div>Public route</div>,
  },
];

export const privateRoutes = [
  {
    path: "/",
    component: () => <div>Private Route</div>,
    exact: true,
  },
];

export const something = [];
