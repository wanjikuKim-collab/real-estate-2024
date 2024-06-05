import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listing from "./pages/Listing";
import Layout from "./layout/layout";
import Property from "./pages/Property"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "listing",
        element: <Listing />,
      },
      {
        path: "/:id",
        element: <Property/>
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
