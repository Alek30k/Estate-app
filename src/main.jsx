import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        {/* <SocketContextProvider> */}
        <App />
        {/* </SocketContextProvider> */}
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
