import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrdersPage from "./presentation/pages/OrdersPage";
import App from "./App";
import LoginPage from "./presentation/pages/LoginPage";
import EmployeesPage from "./presentation/pages/EmployeesPage";
import HomePage from "./presentation/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: (
          <Suspense fallback={"Loading..."}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/orders",
        element: (
          <Suspense fallback={"Loading..."}>
            <OrdersPage />
          </Suspense>
        ),
      },
      {
        path: "/employees",
        element: (
          <Suspense fallback={"Loading..."}>
            <EmployeesPage />
          </Suspense>
        ),
      },
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
