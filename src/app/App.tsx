import styles from "./App.module.css";
import QuizPage from "../pages/QuizPage";
import { questions } from "../assets/questions";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import ThemeButton from "../components/ThemeButton";

function App() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }
  const { theme, toggleTheme } = context;

  return (
    <div className={styles.main}>
      <div className={styles.theme}>
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </div>
      <h2>Quiz App</h2>
      <h1>React Hooks</h1>
      <img
        className={styles.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      ></img>
      <QuizPage questions={questions} />
    </div>
  );
}

export default App;
