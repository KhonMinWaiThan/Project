import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import HighlightedCars from "./routes/HighlightedCars";
import Dashboard from "./routes/Dashborad"; // Assuming you have a Dashboard component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard /> // This is your home page
      },
      {
        path: "highlightedcars",
        element: <HighlightedCars /> // Your highlighted cars page
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
