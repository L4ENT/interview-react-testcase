import { createBrowserRouter } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);


export default router