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

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
