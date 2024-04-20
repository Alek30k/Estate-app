import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./contact.scss";

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`contact ${theme}`}>ContactPage</div>;
};

export default ContactPage;
