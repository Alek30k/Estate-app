import "./layout.scss";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ThemeContext from "./context/ThemeContext";

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <body className={theme}>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className={`content ${theme}`}>
          <Outlet />
        </div>
      </div>
    </body>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  const { theme } = useContext(ThemeContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <body className={theme}>
        <div className="layout">
          <div className="navbar">
            <Navbar />
          </div>
          <div className={`content ${theme}`}>
            <Outlet />
          </div>
        </div>
      </body>
    );
  }
}

export { Layout, RequireAuth };
