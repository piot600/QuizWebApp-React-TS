import { type QuestionProps } from "../../assets/questions";
import styles from "../QuizPage.module.css";

type ScreenProps = {
  score: number;
  onReset: () => void;
  questions: QuestionProps[];
};

export function ResultScreen({ score, onReset, questions }: ScreenProps) {
  return (
    <>
      <p>Your Score</p>
      <p className={styles.score}>{score + "/" + questions.length}</p>
      <p className={styles.score}>{(score / questions.length) * 100 + "%"}</p>
      <button className={styles.button} onClick={onReset}>
        Home Page
      </button>
    </>
  );
}
