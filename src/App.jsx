import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import DataForm from "./pages/DataForm";
import DetailsPage from "./pages/DetailsPage";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Collection from "./pages/Collection";
import NewFort from "./pages/NewFort";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "nav", element: <Categories /> },
      { path: "/:page/:id", element: <DetailsPage /> },
      { path: "cart", element: <Cart /> },
      { path: "new", element: <NewFort /> },
      { path: "collection/:collectionname", element: <Collection /> },
    ],
  },
  { path: "form", element: <DataForm /> },
  { path: "checkout", element: <CheckOut /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
