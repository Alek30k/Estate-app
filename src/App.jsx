import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/layout";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ProfilePage from "./routes/profilePage/ProfilePage";
import AboutPage from "./routes/about/page";
import ContactPage from "./routes/contact/page";
import AgentsPage from "./routes/agents/page";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import ListPage from "./routes/listPage/ListPage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import SinglePage from "./routes/singlePage/SinglePage";

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
          // loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          // loader: singlePageLoader,
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
          // loader: profilePageLoader
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
