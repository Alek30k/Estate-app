import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./agents.scss";

const AgentsPage = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`agents ${theme}`}>AgentsPage</div>;
};

export default AgentsPage;
