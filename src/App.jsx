import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ListPage from "./routes/listPage/listPage";
import Layout, { RequireAuth } from "./routes/layout/layout";
// import SinglePage from "./routes/singlePage/singlePage";
// import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ProfilePage from "./routes/profilePage/ProfilePage";
import AboutPage from "./routes/about/page";
import ContactPage from "./routes/contact/page";
import AgentsPage from "./routes/agents/page";
// import Login from "./routes/login/login";
// import Register from "./routes/register/register";

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
        // {
        //   path: "/list",
        //   element: <ListPage />,
        // },
        // {
        //   path: "/:id",
        //   element: <SinglePage />,
        // },

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
        // {
        //   path: "/profile/update",
        //   element: <ProfileUpdatePage />,
        // },
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
