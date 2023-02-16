import Home from "./pages/Home";
import { useState, createContext } from "react";
import ReactSwitch from "react-switch";
import "./App.css";

const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <div
          style={{
            position: "absolute",
            zIndex: "100",
            marginLeft: "50vw",
            marginTop: "3vh",
          }}
        >
          <ReactSwitch
            className="switch"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </div>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
