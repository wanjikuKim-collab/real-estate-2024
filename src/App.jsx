import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listing from "./pages/Listing";
import Layout from "./layout/layout";
import Property from "./pages/Property"
import Profile from "./pages/Profile";

// Defines application routes using React Router v6.
// - Layout component provides the overall application structure.
// - Home, Listing, and Property pages are nested within the layout.
// - The route "/:id" captures a dynamic parameter for the Property page.
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
      },
      {
        path: "/profile",
        element: <Profile/>

      },
    ],
  },
]);
function App() {
   //App component renders RouterProvider with the defined router object
  return <RouterProvider router={router} />;
}

export default App;
