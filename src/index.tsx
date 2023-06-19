import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnotherTaskSection from "./components/AnotherTaskSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/anotherTask", element: <AnotherTaskSection /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
