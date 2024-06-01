import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrdersPage from "./presentation/pages/OrdersPage";
import App from "./App";
import LoginPage from "./presentation/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <OrdersPage />,
      },
      // {
      //     path: '/shop',
      //     element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      // },
      // {
      //     path: '/about',
      //     element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
      // },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

// Render your React component instead
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
