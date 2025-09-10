import { useState } from "react";
import styles from "./Question.module.css";
import { questions } from "../assets/questions";

type QuestionProps = {
  question: string;
  answer: string[];
  name: string;
  index: number;
  onClick: (value: number | null) => void;
};

function Question({ question, answer, name, index, onClick }: QuestionProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <fieldset className={styles.fieldset}>
      <legend>{"Question " + index + "/" + questions.length}</legend>
      <legend className={styles.legend}>{question}</legend>
      {answer.map((a, k) => (
        <label className={styles.label} key={k}>
          <input
            type="radio"
            className={styles.input}
            name={name}
            checked={selected === k}
            onChange={() => setSelected(k)}
          />
          {a}
        </label>
      ))}
      <button
        className={styles.button}
        onClick={() => {
          onClick(selected);
          setSelected(null);
        }}
      >
        next
      </button>
    </fieldset>
  );
}

export default Question;
