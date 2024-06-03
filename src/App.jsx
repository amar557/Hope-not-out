import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import DetailsPage from "./pages/DetailsPage";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Collection from "./pages/Collection";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "nav", element: <Categories /> },
      { path: "/:page/:id", element: <DetailsPage /> },
      { path: "cart", element: <Cart /> },

      {
        path: "collection/:collectionname",
        element: <Collection />,
      },
    ],
  },

  { path: "checkout", element: <CheckOut /> },
  { path: "error", element: <Error /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
