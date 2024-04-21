import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Moon from "./components/Moon";
import Sun from "./components/Sun";
import "./themeSwitch.css";

export const ThemeSwitch = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun onClick={handleTheme} value="light" />
        <Moon onClick={handleTheme} value="dark" />
      </label>
    </div>
  );
};
