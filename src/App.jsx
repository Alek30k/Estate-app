// import HomePage from "./routes/homePage/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/layout";
import Login from "./routes/login/page";
import Register from "./routes/register/page";
import ProfilePage from "./routes/profilePage/page";
import AboutPage from "./routes/about/page";
import ContactPage from "./routes/contact/page";
import AgentsPage from "./routes/agents/page";
import ProfileUpdatePage from "./routes/profileUpdatePage/page";
import ListPage from "./routes/listPage/page";
import NewPostPage from "./routes/newPostPage/page";
import SinglePage from "./routes/singlePage/page";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";
import HomePage from "./routes/homePage/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/agents",
          element: <AgentsPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
