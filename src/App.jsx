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
        // {
        //   path: "/add",
        //   element: <NewPostPage />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
