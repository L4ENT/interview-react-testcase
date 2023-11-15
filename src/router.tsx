import { createBrowserRouter } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/interview-react-testcase",
    element: <Catalog/>,
  },
  {
    path: "/interview-react-testcase/cart",
    element: <Cart/>,
  },
]);


export default router