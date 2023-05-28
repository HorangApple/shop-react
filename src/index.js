import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppStateProvider from "./providers/AppStateProvider";
import Root from "./routes/Root";
import CheckOut from "./routes/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
