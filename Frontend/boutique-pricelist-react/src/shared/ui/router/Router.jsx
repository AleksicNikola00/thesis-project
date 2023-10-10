import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/HomePage";
import HomePage from "../pages/HomePage";
import ProductPage from "../../../products/pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
