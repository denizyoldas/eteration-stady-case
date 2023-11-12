import { useRoutes } from "react-router-dom";

import ProductDetailPage from "../pages/product/detail";
import HomePage from "../pages/home";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:id",
      element: <ProductDetailPage />,
    },
  ]);

  return routes;
};

export default Routes;
