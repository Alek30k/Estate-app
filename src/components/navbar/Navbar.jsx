import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ThemeContext from "../../context/ThemeContext";
// import { useNotificationStore } from "../../lib/notificationStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { theme, handleTheme } = useContext(ThemeContext);

  const { currentUser } = useContext(AuthContext);
  // const fetch = useNotificationStore((state) => state.fetch);
  // const number = useNotificationStore((state) => state.number);

  // if (currentUser) fetch();

  const navLink = ["home", "about", "contact", "agents"];

  const switchType = (val) => {
    setQuery(val);
    setOpen(false);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>AleEstate</span>
          <select name="language">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <input
            type="radio"
            name="theme"
            id="light"
            onClick={handleTheme}
            value="light"
          />
          <label htmlFor="light">claro</label>
          <input
            type="radio"
            name="theme"
            id="dark"
            onClick={handleTheme}
            value="dark"
          />
          <label htmlFor="dark">oscuro</label>
        </a>
        {/* <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a> */}
        {navLink.map((type) => (
          <Link key={type} to={`/${type === "home" ? "" : type}`}>
            <button
              onClick={() => switchType(type)}
              className={query === type ? "active" : ""}
            >
              {type}
            </button>
          </Link>
        ))}
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpeg"} alt="profile" />
            <span>{currentUser.username}</span>

            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
            {/* <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}

              <span>Profile</span>
            </Link> */}
          </div>
        ) : (
          <div className="logged">
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </div>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu-icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          {/* <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a> */}
          {navLink.map((type) => (
            <Link key={type} to={`/${type === "home" ? "" : type}`}>
              <button
                onClick={() => switchType(type)}
                className={query === type ? "active" : ""}
              >
                {type}
              </button>
            </Link>
          ))}
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
