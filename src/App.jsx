import HomePage from "../routes/homePage/homePage";
import Navbar from "./components/navbar/Navbar";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
