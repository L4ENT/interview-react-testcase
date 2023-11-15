import React from "react";
import ReactDOM from "react-dom/client";

import "@styles/index.scss";
import "@styles/variables.scss";

import { RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import router from '@/router';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// TODO: Wrap Router with App container
// TODO: Add strict mode
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
