import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./about.scss";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`about ${theme}`}>AboutPage</div>;
};

export default AboutPage;
