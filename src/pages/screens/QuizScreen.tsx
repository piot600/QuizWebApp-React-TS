import type { QuestionProps } from "../../assets/questions";
import Question from "../../components/Question";

type ScreenProps = {
  currentQuestion: number;
  onConfirm: (value: number | null) => void;
  questions: QuestionProps[];
};

export function QuizScreen({
  currentQuestion,
  onConfirm,
  questions,
}: ScreenProps) {
  const question = questions[currentQuestion].question;
  const answer = questions[currentQuestion].answer;
  const name = `q-${currentQuestion}`;
  return (
    <Question
      question={question}
      answer={answer}
      name={name}
      index={currentQuestion + 1}
      onClick={onConfirm}
    />
  );
}
