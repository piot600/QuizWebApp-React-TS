import styles from "../QuizPage.module.css";

type ScreenProps = {
  onStart: () => void;
};

export function HomeScreen({ onStart }: ScreenProps) {
  return (
    <button className={styles.button} onClick={onStart}>
      START QUIZ
    </button>
  );
}
