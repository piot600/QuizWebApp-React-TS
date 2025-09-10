import styles from "./App.module.css";
import QuizPage from "../pages/QuizPage";
import { questions } from "../assets/questions";

function App() {
  return (
    <div className={styles.main}>
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
